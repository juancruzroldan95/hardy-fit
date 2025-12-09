import mapboxgl from "mapbox-gl";

type DatasetMapElement = HTMLElement & {
  dataset: {
    token?: string;
    style?: string;
    center?: string;
    zoom?: string;
    locationsJson?: string;
  };
};

const mapElement = document.getElementById("map") as DatasetMapElement | null;
const locationsContainer = document.querySelector(
  ".locations-list",
) as HTMLElement | null;

if (!mapElement) {
  console.error("[Distribuidores] Map element not found");
} else {
  const MAPBOX_TOKEN = mapElement.dataset.token ?? "";
  const MAPBOX_STYLE_URL = mapElement.dataset.style ?? "";
  const MAP_CENTER = mapElement.dataset.center
    ? JSON.parse(mapElement.dataset.center)
    : [-71.06707, 42.35072];
  const MAP_ZOOM = mapElement.dataset.zoom
    ? Number(mapElement.dataset.zoom)
    : 9;
  const LOCATIONS =
    locationsContainer?.dataset.locationsJson &&
    locationsContainer.dataset.locationsJson !== ""
      ? (JSON.parse(locationsContainer.dataset.locationsJson) as {
          storeName: string;
          address: string;
          city: string;
          state: string;
          postalCode: string;
          country: string;
          phoneFormatted: string;
          coordinates: [number, number];
        }[])
      : [];

  const initMap = async () => {
    if (!MAPBOX_TOKEN) {
      console.error("[Distribuidores] PUBLIC_MAPBOX_TOKEN is missing");
      return;
    }

    console.info("[Distribuidores] Initializing map", {
      tokenPresent: !!MAPBOX_TOKEN,
      style: MAPBOX_STYLE_URL,
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      locationsCount: LOCATIONS.length,
    });

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: "map",
      style: MAPBOX_STYLE_URL,
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
    });

    map.on("error", (e) => {
      console.error("[Distribuidores] Map error event", e?.error ?? e);
    });

    map.on("load", () => {
      console.info("[Distribuidores] Map load event");
      const layers = ["dog-spas-markers", "dog-spas-circles"];

      layers.forEach((layer, index) => {
        // Add Click interaction
        map.addInteraction(`click-marker-${index}`, {
          type: "click",
          target: { layerId: layer },
          handler: (e) => {
            if (!e.feature || !("properties" in e.feature)) {
              console.warn("[Distribuidores] Click event missing feature", e);
              return;
            }

            const coords =
              "geometry" in e.feature &&
              (e.feature.geometry as { coordinates?: [number, number] })
                ?.coordinates;

            if (!coords) {
              console.warn("[Distribuidores] Feature without coordinates", e);
              return;
            }

            console.info("[Distribuidores] Click on layer", layer, e.feature);
            const popup = new mapboxgl.Popup({ offset: [0, -15] })
              .setLngLat(coords)
              .setHTML(
                `<h3>${e.feature.properties.storeName}</h3>
                <p>${e.feature.properties.address}</p>
                <p>${e.feature.properties.phoneFormatted}</p>`,
              )
              .addTo(map);
          },
        });

        // Add mouse-enter interaction
        map.addInteraction(`mouse-enter-marker-${index}`, {
          type: "mouseenter",
          target: { layerId: layer },
          handler: () => {
            map.getCanvas().style.cursor = "pointer";
          },
        });

        // Add mouse-leave interaction
        map.addInteraction(`mouse-leave-marker-${index}`, {
          type: "mouseleave",
          target: { layerId: layer },
          handler: () => {
            map.getCanvas().style.cursor = "";
          },
        });
      });

      // Card -> map linkage
      const cards =
        document.querySelectorAll<HTMLElement>("[data-location-id]");
      if (cards.length === 0) {
        console.warn("[Distribuidores] No location cards found for linking");
      }

      cards.forEach((card, idx) => {
        const location = LOCATIONS[idx];
        if (!location) return;

        card.addEventListener("click", () => {
          console.info("[Distribuidores] Card click -> flyTo", {
            idx,
            storeName: location.storeName,
            coordinates: location.coordinates,
          });
          map.flyTo({
            center: location.coordinates,
            zoom: 14,
            speed: 1.4,
          });

          // optional popup on flyTo to mirror click interaction
          new mapboxgl.Popup({ offset: [0, -10] })
            .setLngLat(location.coordinates)
            .setHTML(
              `<h3>${location.storeName}</h3>
              <p>${location.address}</p>
              <p>${location.phoneFormatted}</p>`,
            )
            .addTo(map);
        });
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initMap().catch((error) =>
        console.error("[Distribuidores] Error initializing map:", error),
      );
    });
  } else {
    initMap().catch((error) =>
      console.error("[Distribuidores] Error initializing map:", error),
    );
  }
}

import mapboxgl from "mapbox-gl";

const mapElement = document.getElementById("map");
const locationsContainer = document.querySelector(".locations-list");

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
  mapElement.setAttribute("tabindex", "-1");
  const LOCATIONS =
    locationsContainer?.dataset.locationsJson &&
    locationsContainer.dataset.locationsJson !== ""
      ? JSON.parse(locationsContainer.dataset.locationsJson)
      : [];

  const initMap = async () => {
    if (!MAPBOX_TOKEN) {
      console.error("[Distribuidores] PUBLIC_MAPBOX_TOKEN is missing");
      return;
    }

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
              "geometry" in e.feature && e.feature.geometry?.coordinates;

            if (!coords) {
              console.warn("[Distribuidores] Feature without coordinates", e);
              return;
            }

            new mapboxgl.Popup({ offset: [0, -15], focusAfterOpen: false })
              .setLngLat(coords)
              .setHTML(
                `
                  <h3 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 600; color: #ED3237; text-transform: uppercase; text-align: center;">${e.feature.properties.storeName}</h3>
                  <p style="margin: 0; font-size: 14px; color: #374151; text-align: center;">${e.feature.properties.address}, ${e.feature.properties.city}, ${e.feature.properties.state}</p>
                `,
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
      const cards = document.querySelectorAll("[data-location-id]");
      if (cards.length === 0) {
        console.warn("[Distribuidores] No location cards found for linking");
      }

      cards.forEach((card, idx) => {
        const location = LOCATIONS[idx];
        if (!location) return;

        card.addEventListener("click", () => {
          map.flyTo({
            center: location.coordinates,
            zoom: 14,
            speed: 1.4,
          });

          new mapboxgl.Popup({ offset: [0, -10], focusAfterOpen: false })
            .setLngLat(location.coordinates)
            .setHTML(
              `
                <h3 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 600; color: #ED3237; text-transform: uppercase; text-align: center;">${location.storeName}</h3>
                <p style="margin: 0; font-size: 14px; color: #374151; text-align: center;">${location.address}, ${location.city}, ${location.state}</p>
              `,
            )
            .addTo(map);

          // On mobile, bring map into view
          if (window.innerWidth < 768 && mapElement) {
            mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
            mapElement.focus({ preventScroll: true });
          }
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

import { LOCATIONS } from "../consts/locations";
import fs from "fs";
import path from "path";

const geojson = {
  type: "FeatureCollection",
  features: LOCATIONS.map((loc) => ({
    type: "Feature",
    properties: {
      storeName: loc.storeName,
      address: loc.address,
      city: loc.city,
      country: loc.country,
      postalCode: loc.postalCode,
      state: loc.state,
    },
    geometry: {
      coordinates: loc.coordinates,
      type: "Point",
    },
  })),
};

const outputPath = path.resolve(process.cwd(), "locations.geojson");

try {
  fs.writeFileSync(outputPath, JSON.stringify(geojson, null, 2));
  console.log(`✅ GeoJSON successfully generated at: ${outputPath}`);
} catch (error) {
  console.error("❌ Error generating GeoJSON:", error);
  process.exit(1);
}

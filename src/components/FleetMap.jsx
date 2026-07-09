import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function FleetMap() {
  return (
    <MapContainer
      center={[23.2599, 77.4126]}
      zoom={12}
      style={{ height: "500px", width: "800px" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[23.2599, 77.4126]}>
        <Popup>
          Vehicle: MH12AB1234 <br />
          Speed: 52 km/h <br />
          Status: On Trip
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default FleetMap;

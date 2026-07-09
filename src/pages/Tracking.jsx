import Sidebar from "../components/Sidebar";
import FleetMap from "../components/FleetMap";
import Navbar from "../components/Navbar";

function Tracking() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Fleet Tracking</h1>

          <FleetMap />

          <h2 style={{ marginTop: "30px" }}>Fleet Summary</h2>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Speed</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MH12AB1234</td>
                <td>Rahul</td>
                <td>On Trip</td>
                <td>52 km/h</td>
              </tr>

              <tr>
                <td>MH12CD5678</td>
                <td>Amit</td>
                <td>Available</td>
                <td>0 km/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tracking;

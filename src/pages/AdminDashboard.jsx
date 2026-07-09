import Sidebar from "../components/Sidebar";
import FuelChart from "../components/FuelChart";
import SafetyChart from "../components/SafetyChart";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Admin Dashboard</h1>

          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              Total Vehicles: 20
            </div>

            <div
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              Active Vehicles: 15
            </div>

            <div
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              Maintenance: 5
            </div>
          </div>

          <h2 style={{ marginTop: "30px" }}>Fuel Analytics</h2>
          <FuelChart />

          <h2 style={{ marginTop: "30px" }}>Driver Safety Analytics</h2>
          <SafetyChart />

          <h2 style={{ marginTop: "30px" }}>Maintenance Alerts</h2>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MH12AB1234</td>
                <td>Service Due</td>
              </tr>

              <tr>
                <td>MH12CD5678</td>
                <td>Healthy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

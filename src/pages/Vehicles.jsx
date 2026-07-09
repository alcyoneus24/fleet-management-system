import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Vehicles() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Vehicle Management</h1>

          <div style={{ marginBottom: "15px" }}>
            <button
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Add Vehicle
            </button>

            <button
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Edit Vehicle
            </button>

            <button
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Delete Vehicle
            </button>
          </div>

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th>Vehicle No</th>
                <th>Mileage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MH12AB1234</td>
                <td>18</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>MH12CD5678</td>
                <td>15</td>
                <td>On Trip</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;

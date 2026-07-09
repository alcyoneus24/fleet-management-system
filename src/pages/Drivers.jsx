import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Drivers() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Driver Management</h1>

          <div style={{ marginBottom: "15px" }}>
            <button
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Add Driver
            </button>

            <button
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Edit Driver
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
                <th>Name</th>
                <th>Phone</th>
                <th>Safety Score</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>9999999999</td>
                <td>95</td>
              </tr>

              <tr>
                <td>Amit</td>
                <td>8888888888</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Drivers;

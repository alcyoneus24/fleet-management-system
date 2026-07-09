import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Orders() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Orders Management</h1>

          <div style={{ marginBottom: "15px" }}>
            <button
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Assign Driver
            </button>

            <button
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Assign Vehicle
            </button>

            <button
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Update Status
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
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1001</td>
                <td>ABC Corp</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>1002</td>
                <td>XYZ Logistics</td>
                <td>In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;

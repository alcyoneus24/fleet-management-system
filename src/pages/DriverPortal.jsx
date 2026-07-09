import Navbar from "../components/Navbar";

function DriverPortal() {
  return (
    <div style={{ flex: 1 }}>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Driver Portal</h1>

        <h3>Assigned Vehicle</h3>
        <p>MH12AB1234</p>

        <h3>Pickup Location</h3>
        <p>Warehouse A</p>

        <h3>Delivery Location</h3>
        <p>Customer B</p>

        <h3>Distance</h3>
        <p>25 KM</p>

        <h3>Estimated Time</h3>
        <p>40 Minutes</p>

        <h3>Safety Score</h3>
        <p>95 / 100</p>

        <button
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Mark Delivery Completed
        </button>
      </div>
    </div>
  );
}

export default DriverPortal;

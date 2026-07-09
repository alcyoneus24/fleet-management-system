import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Fleet System</h2>

      <p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/admin">
          Dashboard
        </Link>
      </p>

      <p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/vehicles">
          Vehicles
        </Link>
      </p>

      <p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/drivers">
          Drivers
        </Link>
      </p>

      <p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/orders">
          Orders
        </Link>
      </p>
      <p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/tracking">
          Fleet Tracking
        </Link>
      </p>
      <p>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/analytics"
        >
          Analytics
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;

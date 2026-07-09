import Sidebar from "../components/Sidebar";
import FuelChart from "../components/FuelChart";
import SafetyChart from "../components/SafetyChart";
import Navbar from "../components/Navbar";

function Analytics() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Analytics Dashboard</h1>

          <h2>Fuel Analytics</h2>
          <FuelChart />

          <h2 style={{ marginTop: "30px" }}>Driver Safety Analytics</h2>
          <SafetyChart />
        </div>
      </div>
    </div>
  );
}

export default Analytics;

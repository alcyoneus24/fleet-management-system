import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SafetyChart() {
  const data = {
    labels: ["Rahul", "Amit", "Rohit"],
    datasets: [
      {
        label: "Safety Score",
        data: [95, 90, 85],
      },
    ],
  };

  return (
    <div style={{ width: "600px", marginTop: "30px" }}>
      <Bar data={data} />
    </div>
  );
}

export default SafetyChart;

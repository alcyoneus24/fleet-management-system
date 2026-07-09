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

function FuelChart() {
  const data = {
    labels: ["Vehicle A", "Vehicle B", "Vehicle C"],
    datasets: [
      {
        label: "Fuel Consumption",
        data: [50, 65, 40],
      },
    ],
  };

  return <Bar data={data} />;
}

export default FuelChart;

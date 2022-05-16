import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data1, data2 }) => {
  const data = {
    labels: data1,
    prefix: '$',
    datasets: [
      {
        label: "Price ( Past 7 days )",
        data: data2,
        borderColor: ['#cb6ce6']
      },
    ],
  };
  return <Line data={data} />;
};

export default LineChart;

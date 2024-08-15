const xValues = [
  "Daytime Job",
  "Relaxation",
  "Spending time with family",
  "Sleep, beautiful sleep",
  "Hopeful noverlist by night",
];
const yValues = [50, 10, 10, 20, 10];
const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "A Day of My Life",
    },
  },
});

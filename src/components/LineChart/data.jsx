export const data = {
    labels: ["00:00", "01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
    datasets: [
      {
        label: "2023 year",
        data: [30,0,0,0,0,0,0,0, 41, 43,23,45,65,34,45,65,75,35,56,34,34,65,77,76],
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    //   {
    //     label: "2024 year",
    //     data: [30, 48, 35, 49, 86, 37, 30],
    //     fill: true,
    //     tension: 0.4,
    //     backgroundColor: "rgba(153,102,255,0.4)",
    //     borderColor: "rgba(153,102,255,1)",
    //   },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "How I use phone in during the day. ",
      },
    },
  };
  
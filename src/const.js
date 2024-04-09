import { faker } from "@faker-js/faker";

export default {
  barTableDataProducts: {
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barTableDataHazards: {
    labels: ["Hazard 1", "Hazard 2", "Hazard 3", "Hazard 4", "Hazard 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  },
  barTableDataTiers: {
    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5", "Tier 6"],
    datasets: [
      {
        label: "B2B",
        data: new Array(6)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 20 })),
        backgroundColor: "rgba(120, 233, 240, 1)",
      },
    ],
  },
  barTableDataTopProducts: {
    labels: ["P62AXZUS", "P62AXZUS", "P62AXZUS", "P62AXZUS", "P62AXZUS"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 20 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  },
  barTableDataRegions: {
    labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  },
  barTableDataMaterials: {
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barTableDataClients: {
    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barTableDataSuppliers: {
    labels: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
    datasets: [
      {
        label: "B2B",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barTableDisruptions: {
    labels: [
      "H1-Sea Level",
      "H2-Heat wave",
      "H3-Precipitation",
      "H3-Drought",
      "H4-Wild Fire",
    ],
    datasets: [
      {
        // label: 'B2B',
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  },
  barData: {
    labels: ["B2B", "B2C"],
    datasets: [
      {
        label: "B2B",
        data: new Array(2)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(120, 233, 240, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barDataFrequency: {
    labels: ["H1", "H2", "H3", "H4", "H5", "H6"],
    datasets: [
      {
        data: new Array(6)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(120, 233, 240, 1)",
      },

      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barDataMonthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
    datasets: [
      {
        data: new Array(9)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 600 })),
        backgroundColor: "rgba(120, 233, 240, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  barDataRevenueFrequency: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        data: new Array(15)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(120, 233, 240, 1)",
      },
      // {
      //   label: 'B2C',
      //   data: new Array(1).fill(0).map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(50, 139, 144, 1)',
      // }
    ],
  },
  doughnutData: {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "# of facilities",
        data: new Array(3)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: [
          "rgba(0, 148, 255, 1)",
          "rgba(219, 160, 8, 1)",
          "rgba(138, 72, 189, 1)",
        ],
      },
    ],
  },
  doughnutDataRegions: {
    labels: ["B2B", "B2C", "Overlap"],
    datasets: [
      {
        label: "# of facilities",
        data: new Array(3)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: [
          "rgba(0, 148, 255, 1)",
          "rgba(219, 160, 8, 1)",
          "rgba(138, 72, 189, 1)",
        ],
      },
    ],
  },
  doughnutDataTiers: {
    labels: ["Tier1", "Tier2", "Tier3", "Tier4", "Tier5"],
    datasets: [
      {
        label: "# of facilities",
        data: new Array(5)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: [
          "rgba(0, 148, 255, 1)",
          "rgba(219, 160, 8, 1)",
          "rgba(138, 72, 189, 1)",
          "lightblue",
          "grey",
        ],
      },
    ],
  },
  pieData: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  tableColors: ["#8A48BD", "#0094ff", "#DBA008"],
  stackedBarData: {
    labels: ["%"],
    datasets: [
      {
        label: "RM",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(5, 115, 122, 1)",
      },
      {
        label: "UT",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(15, 159, 169, 1)",
      },
      {
        label: "PD",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(19, 195, 206, 1)",
      },
      {
        label: "SD",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(8, 240, 255, 1)",
      },
      {
        label: "DT",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(155, 249, 255, 1)",
      },
      {
        label: "SS",
        data: new Array(7)
          .fill(0)
          .map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(215, 253, 255, 1)",
      },
    ],
  },
  mapData: {
    AU: 760,
    BR: 550,
    CA: 120,
    DE: 1300,
    FR: 540,
    GB: 690,
    GE: 200,
    IN: 200,
    RO: 600,
    RU: 300,
    US: 2920
  }
};

import { ChartOptions } from './wallet.model';

/**
 * BitCoin Chart
 */
 const BitcoinChart: ChartOptions = {
  series: [{
    name: "Bitcoin",
    data: [85, 68, 35, 90, 8, 11, 26, 54]
  }, ],
  chart: {
    width: 130,
    height: 50,
    type: "area",
    sparkline: {
        enabled: true,
    },
    toolbar: {
        show: false,
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1.5,
  },
  fill: {
    type: "gradient",
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100],
    },
  },
  colors: ["#0ab39c"]
};

/**
 * Lite Coin Chart
 */
 const litecoinChart: ChartOptions = {
  series: [{
    name: "Litecoin",
    data: [25, 50, 41, 87, 12, 36, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Eatherreum Chart
 */
 const EatherreumChart: ChartOptions = {
  series: [{
    name: "Eathereum",
    data: [36, 21, 65, 22, 35, 50, 29, 44]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Binance Chart
 */
 const BinanceChart: ChartOptions = {
  series: [{
    name: "Binance",
    data: [30, 58, 29, 89, 12, 36, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#f06548"]
};

/**
 * Dash Chart
 */
 const DashChart: ChartOptions = {
  series: [{
    name: "Dash",
    data: [24, 68, 39, 86, 29, 42, 11, 58]
}, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Tether Chart
 */
 const TetherChart: ChartOptions = {
  series: [{
    name: "Dash",
    data: [13, 76, 12, 85, 25, 60, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * NEO Chart
 */
 const NeoChart: ChartOptions = {
  series: [{
    name: "Neo",
    data: [9, 66, 41, 89, 12, 36, 25, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#f06548"]
};

// Wallet Data
const Wallets = [
  {
      img: 'assets/images/svg/crypto-icons/btc.svg',
      coinName: "Bitcoin (BTC)",
      quantity: "08",
      avgPrice: "$46,154.30",
      value: "$46,335.40",
      returns: "$3,70,683.2",
      icon: "mdi mdi-trending-up",
      percentage: "0.63%",
      percentageClass: "success",
  },
  {
      img: 'assets/images/svg/crypto-icons/eth.svg',
      coinName: "Ethereum (ETH)",
      quantity: "50",
      avgPrice: "$3,744.48",
      value: "$3,748.66",
      returns: "$1,87,433",
      icon: "mdi mdi-trending-down",
      percentage: "3.42%",
      percentageClass: "danger",
  },
  {
      img: 'assets/images/svg/crypto-icons/xrp.svg',
      coinName: "Ripple (XRP)",
      quantity: "300",
      avgPrice: "$1.05",
      value: "$2.20",
      returns: "$660",
      icon: "mdi mdi-trending-up",
      percentage: "1.20%",
      percentageClass: "success",
  },
  {
      img: 'assets/images/svg/crypto-icons/xmr.svg',
      coinName: "Monero (XMR)",
      quantity: "150",
      avgPrice: "$227.30",
      value: "$226.55",
      returns: "$33,982.5",
      icon: "mdi mdi-trending-down",
      percentage: "1.92%",
      percentageClass: "danger",
  },
  {
      img: 'assets/images/svg/crypto-icons/ltc.svg',
      coinName: "Litecoin (LTC)",
      quantity: "200",
      avgPrice: "$144.00",
      value: "$147.50",
      returns: "$29,500",
      icon: "mdi mdi-trending-down",
      percentage: "0.87%",
      percentageClass: "danger",
  },
  {
      img: 'assets/images/svg/crypto-icons/aave.svg',
      coinName: "Aave (AAVE)",
      quantity: "180",
      avgPrice: "$250.70",
      value: "$254.30",
      returns: "$45,774",
      icon: "mdi mdi-trending-up",
      percentage: "3.96%",
      percentageClass: "success",
  },
  {
      img: 'assets/images/svg/crypto-icons/mkr.svg',
      coinName: "Maker (MKR)",
      quantity: "60",
      avgPrice: "$2,470.30",
      value: "$2,390.75",
      returns: "$1,43,445",
      icon: "mdi mdi-trending-up",
      percentage: "0.36%",
      percentageClass: "success",
  },
  {
      img: 'assets/images/svg/crypto-icons/yfi.svg',
      coinName: "Yearn.finance (YFI)",
      quantity: "25",
      avgPrice: "$37,632.17",
      value: "$39,276.24",
      returns: "$9,81,906",
      icon: "mdi mdi-trending-up",
      percentage: "3.96%",
      percentageClass: "success",
  },
];

export { BitcoinChart, litecoinChart, EatherreumChart, BinanceChart, DashChart, TetherChart, NeoChart, Wallets };

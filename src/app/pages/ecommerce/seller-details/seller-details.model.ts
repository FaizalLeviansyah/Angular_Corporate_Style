// Chart data
export interface ChartType {
  series?: any;
  chart?: any;
  stroke?: any;
  fill?: any;
  markers?: any;
  xaxis?: any;
  grid?: any;
  plotOptions?: any;
  legend?: any;
  colors?: any;
  dataLabels?: any;
  labels?: any;
  yaxis?: any;
  tooltip?: any;
  title?: any;
  responsive?: any;
}

export interface sellerDetailModel {
  image: string;
  name: string;
  category: string;
  stock: string;
  price: string;
  order: string;
  rating: string;
  date: string;
  time: string;
  type?: any;
}

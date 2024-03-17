export interface OrdersModel {
  _id: any;
  orderId: string;
  customer: string;
  amount: string;
  orderDate: string;
  payment: string;
  product: string;
  status: string;
  isSelected?:any;
}

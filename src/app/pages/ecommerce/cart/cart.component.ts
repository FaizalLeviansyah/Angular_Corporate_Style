import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Cart } from './cart.model';
import { cartData } from './data';

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

/**
 * Cart Component
 */
export class CartComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  cartData!: Cart[];
  deleteId: any;
  dataCount: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Shopping Cart', active: true }
    ];

    /**
     * fetches the data
     */
    this._fetchData();
  }

  /**
   * Cart data fetch
   */
  private _fetchData() {
    this.cartData = cartData;
    this.dataCount = this.cartData.length
  }

  // Default
  counter: any = 0;
  increment(event: any, id: any) {
    this.counter = (document.getElementById('cart-' + id) as HTMLInputElement).value;
    this.counter++;
    (document.getElementById('cart-' + id) as HTMLInputElement).value = this.counter;

    var priceselection = event.target.closest('.card.product').querySelector('.product-line-price') as HTMLInputElement;
    var amount = event.target.closest('.card.product').querySelector('.product-price').innerHTML;
    var sub_total_get: any = document.getElementById('cart-subtotal')?.innerHTML;

    var Price = amount * this.counter;
    priceselection.innerHTML = Price.toFixed(2);

    var subTotal: any = parseFloat(amount) + parseFloat(sub_total_get);
    (document.getElementById('cart-subtotal') as HTMLInputElement).innerHTML = subTotal.toFixed(2);

    this.updateQuantity(subTotal);
  }

  decrement(event: any, id: any) {
    this.counter = (document.getElementById('cart-' + id) as HTMLInputElement).value;
    if (this.counter > 1) {
      this.counter--;

      (document.getElementById('cart-' + id) as HTMLInputElement).value = this.counter;

      var priceselection = event.target.closest('.card.product').querySelector('.product-line-price') as HTMLInputElement;
      var amount = event.target.closest('.card.product').querySelector('.product-price').innerHTML;
      var sub_total_get: any = document.getElementById('cart-subtotal')?.innerHTML;

      var Price = amount * this.counter;
      priceselection.innerHTML = Price.toFixed(2);

      var subTotal: any = parseFloat(sub_total_get) - parseFloat(amount);
      (document.getElementById('cart-subtotal') as HTMLInputElement).innerHTML = subTotal.toFixed(2);
      this.updateQuantity(subTotal);
    }
  }

  discountRate = 0.15;
  taxRate = 0.125;
  shippingRate = 65.0;
  updateQuantity(subTotal: any) {
    // Discount
    var discount = parseFloat(subTotal) * this.discountRate;
    (document.getElementById('cart-discount') as HTMLInputElement).innerHTML = discount.toFixed(2);
    // Shipping
    var shipping = parseFloat(subTotal) > 0 ? this.shippingRate : 0;
    (document.getElementById('cart-shipping') as HTMLInputElement).innerHTML = shipping.toFixed(2);
    // Rate 
    var tax = parseFloat(subTotal) * this.taxRate;
    (document.getElementById('cart-tax') as HTMLInputElement).innerHTML = tax.toFixed(2);
    // Total
    var total = parseFloat(subTotal) + tax + shipping - discount;
    (document.getElementById('cart-total') as HTMLInputElement).innerHTML = total.toFixed(2);
  }

  /**
   * Confirmation mail model
   */
  confirm(event: any, content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(event: any, content: any, id: any) {
    var itemTotal: any = (document.getElementById('cart-id' + id)?.querySelector('.product-line-price') as HTMLInputElement).innerHTML;
    var Total: any = document.getElementById('cart-subtotal')?.innerHTML;
    var subTotal: any = parseFloat(Total) - parseFloat(itemTotal);
    (document.getElementById('cart-subtotal') as HTMLInputElement).innerHTML = subTotal.toFixed(2);
    this.updateQuantity(subTotal);
    document.getElementById("cart-id" + id)?.remove();
    this.dataCount = this.dataCount - 1;
  }

}

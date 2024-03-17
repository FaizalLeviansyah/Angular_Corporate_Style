import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})

/**
 * Auction Component
 */
export class AuctionComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // set the current year
  year: number = new Date().getFullYear();
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'NFT Marketplace' },
      { label: 'Live Auction', active: true }
    ];

    /**
     * fetches data
     */
     this.filterredImages = this.list;

         // Date Set
    this._trialEndsAt = "2023-12-31";

    /**
     * Count date set
     */
    interval(1000).pipe(map((x) => {
        this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
    });
  }

  /**
   * Portfolio Modern Data
   */
   filterredImages: { id: number; img?: string; date: string; likes: string; price: string; title: string; available: string; sold: string; progressClass: any; size: any; category: string;}[] | undefined;
   galleryFilter = 'allItems';
   list = [
    {
      id: 1,
      img: 'assets/images/nft/img-01.jpg',
      date: "2024/3/19",
      likes: "19.29",
      price: "97.8",
      title: "Abstract Face Painting",
      available: "436",
      sold: "4187",
      progressClass: "warning",
      size: 67,
      category: "upto-15",
    },
    {
      id: 2,
      img: 'assets/images/nft/gif/img-1.gif',
      date: "2023/4/16",
      likes: "8.42",
      price: "245.23",
      title: "Patterns Arts & Culture",
      available: "8974",
      sold: "13",
      progressClass: "primary",
      size: 10,
      category: "upto-30",
    },
    {
      id: 3,
      img: 'assets/images/nft/img-03.jpg',
      date: "2023/12/1",
      likes: "19.29",
      price: "67.36",
      title: "Creative Filtered Portrait",
      available: "3620",
      sold: "345",
      progressClass: "warning",
      size: 45,
      category: "upto-40",
    },
    {
      id: 4,
      img: 'assets/images/nft/img-04.jpg',
      date: "2024/11/26",
      likes: "34.12",
      price: "34.81",
      title: "Smillevers Crypto",
      available: "3521",
      sold: "1457",
      progressClass: "warning",
      size: 67,
      category: "upto-15",
    },
    {
      id: 5,
      img: 'assets/images/nft/gif/img-5.gif',
      date: "2023/5/27",
      likes: "47.12",
      price: "245.23",
      title: "Long-tailed Macaque",
      available: "30",
      sold: "1369",
      progressClass: "danger",
      size: 95,
      category: "upto-40",
    },
    {
      id: 6,
      img: 'assets/images/nft/img-02.jpg',
      date: "2023/5/20",
      likes: "23.63",
      price: "394.7",
      title: "The Chirstoper",
      available: "1474",
      sold: "7451",
      progressClass: "warning",
      size: 83,
      category: "upto-15",
    },
    {
      id: 7,
      img: 'assets/images/nft/img-06.jpg',
      date: "2023/6/10",
      likes: "36.42",
      price: "745.14",
      title: "Robotic Body Art",
      available: "4563",
      sold: "1024",
      progressClass: "primary",
      size: 24,
      category: "upto-30",
    },
    {
      id: 8,
      img: 'assets/images/nft/gif/img-4.gif',
      date: "2023/6/25",
      likes: "94.1",
      price: "245.23",
      title: "Evolved Reality",
      available: "26",
      sold: "9974",
      progressClass: "danger",
      size: 97,
      category: "upto-15",
    },
  ];


  /***
  * Active all category selected
  */
 activeCategory(category: string) {
   this.galleryFilter = category;
   if (this.galleryFilter === 'allItems') {
     this.filterredImages = this.list;
   } else {
     this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
   }
 }

  /**
   * Day Set
   */
   getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /**
   * Hours Set
   */
  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /**
   * Minutes set
   */
  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /**
   * Secound set
   */
  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }

}

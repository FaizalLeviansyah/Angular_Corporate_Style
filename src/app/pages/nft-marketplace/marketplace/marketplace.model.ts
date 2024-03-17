export interface marketplaceModel {
  id:any,
  images: Array<{
    image?: Array<{
      img?: string;
    }>;
  }>;
}

// Trading Model 
export interface tradingModel {
  id: number;
  img: string;
  author: string;
  title: string;
  cardImg: string;
  likes?:any;
  price: string;
  category: string;
  isActive?: any;
}

// Recent Model 
export interface recentModel {
  id: number;
  img: string;
  likes: string;
  title: string;
  category: string;
  highest:string;
  price: string;
}

// Popular Model 
export interface popularModel {
  id: number;
  cardImg: string;
  img: string;
  author: string;
  products: number;
  isFollow?:any;
}

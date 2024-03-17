export interface collectionModel {
  id:any,
  title:any,
  count:any,
  images: Array<{
    image?: Array<{
      img?: string;
    }>;
  }>;
}

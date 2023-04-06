export interface Product {
  id: number;
  isRecommended: boolean;
  isDiscount: boolean;
  isOrganic: boolean;
  isFavourite: boolean;
  discount: string;
  rating: number;
  image: {
    front: string;
    side: string;
    back: string;
  };
  title: string;
  isAvailable: boolean;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  productQuantity: number;
  skuNumber: string;
}

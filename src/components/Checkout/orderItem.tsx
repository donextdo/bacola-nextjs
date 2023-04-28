export interface OrderItem {
    userId: string;
    id: number;
    totalprice: number;
    date:string;
    status:string;
    items: {
      
      orderquantity: number;
      
      productId:number;
    }[];
  }
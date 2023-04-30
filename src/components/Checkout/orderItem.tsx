export interface OrderItem {
    userId: string;
    _Id: string;
    totalprice: number;
    date:string;
    status:string;
    items: {
      
      orderquantity: number;
      
      productId:number;
    }[];
  }
export interface User {
    _id: string;
    userName: string;
    email: string;
    password: string;
    __v: number;
    displayName: string;
    firstName: string;
    lastName: string;
    billingAddress: {
      billingFirstName: string;
      billingLastName: string;
      billingCompanyName: string;
      billingPhone: string;
      street: string;
      apartment: string;
      town: string;
      state: string;
      country: string;
      zipCode: string;
      billingEmail: string;
      _id: string;
    };
    shippingAddress: {
      shippingFirstName: string;
      shippingLastName: string;
      shippingCompanyName: string;
      shippingphone: string;
      street: string;
      apartment: string;
      town: string;
      state: string;
      country: string;
      zipCode: string;
      shippingEmail: string;
      _id: string;
    };
  }
  
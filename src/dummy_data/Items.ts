import meal1 from "../asserts/meal1.jpg";
import meal2 from "../asserts/meal2.jpg";
import meal3 from "../asserts/meal3.jpg";
import meal4 from "../asserts/meal4.png";

export const data: Array<Object> = [
    {
      isRecommended: true,
      isDiscount: true,
      isOrganic: false,
      isFavourite: true,
      discount: 23,
      rating: 4,
      image: meal1,
      title: "All Natural Italian-Style Chicken Meatballs",
      isAvailable: true,
      price: 49.99,
    },
    {
      isRecommended: false,
      isDiscount: true,
      isOrganic: false,
      isFavourite: true,
      discount: 24,
      rating: 4,
      image: meal2,
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      isAvailable: true,
      price: 49.99,
    },
    {
      isRecommended: false,
      isDiscount: true,
      isOrganic: true,
      isFavourite: false,
      discount: 19,
      rating: 4,
      image: meal3,
      title: "Field Roast Chao Cheese Creamy Original",
      isAvailable: true,
      price: 49.99,
    },
    {
      isRecommended: false,
      isDiscount: false,
      isOrganic: false,
      isFavourite: false,
      discount: 0,
      rating: 4,
      image: meal4,
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      isAvailable: true,
      price: 49.99,
    },
  ];
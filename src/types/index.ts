export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starter" | "main" | "dessert" | "drink";
  image?: string;
  isSignature?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Dish3D {
  id: string;
  name: string;
}

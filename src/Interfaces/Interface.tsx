type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]
}

export interface CardProp {
  product : ProductType
}

export interface carouselItem {
  title:string;
  image: string;
  category: string
}


export interface CartItem {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
}

export interface CartItemProp {
  cartItem : CartItem;
  deleteHandler: (id:number)=>void
}
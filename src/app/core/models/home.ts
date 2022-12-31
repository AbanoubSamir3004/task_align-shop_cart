export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
  quantity: number;
}

interface Rate {
  rate: number;
  count: number;
}

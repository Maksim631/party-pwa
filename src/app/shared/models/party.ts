import {Category} from './category';

export interface Party {
  id: number;
  title: string;
  description: string;
  enter?: boolean;
  date: Date;
  price: number;
  address: string;
  category: Category;
}

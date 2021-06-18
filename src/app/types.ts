export interface Dish {
  id: string;
  name: string;
  photo: string;
  recipes: any;
}

export interface Recipe {
  dish: string;
  source: string;
  serving_size: string;
  ingredients: string[];
  instructions: string[];
}

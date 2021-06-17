export interface Dish {
  id: string;
  name: string;
  photo: string;
  num_recipes: number;
  recipes: any;
}

interface Ingredient {
  quantity: string;
  name: string;
}

export interface Recipe {
  dish: string;
  source: string;
  serving_size: number;
  ingredients: Ingredient[];
  instructions: string;
}

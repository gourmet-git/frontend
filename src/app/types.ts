export interface Dish {
  name: string;
  photo_path: string;
  num_recipes: number;
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

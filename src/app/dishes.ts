export interface Dish {
  name: string;
  photo_path: string;
  num_recipes: number;
}

export const dishes = [
  {
    name: "Egg Tarts",
    photo_path: "assets/dish_photos/egg_tarts.jpg",
    num_recipes: 5,
  },
  {
    name: "Maple Cheesecake",
    photo_path: "assets/dish_photos/maple_cheesecake.jpg",
    num_recipes: 1,
  },
  {
    name: "Matcha Cookies",
    photo_path: "assets/dish_photos/matcha_cookies.jpg",
    num_recipes: 2,
  },
];

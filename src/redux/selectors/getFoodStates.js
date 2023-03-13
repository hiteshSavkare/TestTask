//selectors to get the data from redux
export const getRecipies = (state) => state.food.recipies;
export const getCuisines = (state) => state.food.cuisines;
export const getIsLoading = (state) => state.food.isLoading;
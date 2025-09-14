import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const calculateTotalPrice = (itemsArray) => {
  // Use the reduce method to iterate through the array and accumulate the total price.
  // The accumulator starts at 0.
  return itemsArray.reduce((total, currentItem) => {
    // Add the price of the current item to the total.
    return total + currentItem.price;
  }, 0);
};

export const updateItemQuantity = (itemsArray, itemName, newQuantity) => {
  // The map method creates a new array by applying a function to each element.
  return itemsArray.map(item => {
    // Check if the current item is the one we want to update.
    if (item.name === itemName) {
      // Return a new object with the updated quantity.
      return { ...item,
        quantity: newQuantity
      };
    }
    // Return the original item if it's not the one we're updating.
    return item;
  });
};

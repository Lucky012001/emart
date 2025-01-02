// src/redux/reducer/handleCart.js

const initialState = [];

const handleCart = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM": {
      // Check if the product already exists in the card
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // Add new product with quantity 1
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    }

    case "DELITEM": {
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        if (exist.qty === 1) {
          // Remove the product from the card if quantity is 1
          return state.filter((x) => x.id !== product.id);
        } else {
          // Decrease the quantity
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      }

      return state; // If product is not found, return the current state
    }

    default:
      return state; // Return the unchanged state for unknown actions
  }
};

export default handleCart;

// ------------------------------------------------------>
// src/redux/reducer/handleCart.js
// const initialState = {
//   items: [],  
// };

// const handleCart = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload.id),
//       };
//     default:
//       return state; // Always return state if no actions match
//   }
// };

// export default handleCart;
// ---------------------------------------->
// src/redux/reducer/handleCart.js
// const initialState = [];

// const handleCart = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return [...state, action.payload]; // Add item to card
//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.id !== action.payload.id); // Remove item from card
//     default:
//       return state; // Return unchanged state
//   }
// };

// export default handleCart;

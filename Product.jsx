// Importing the `toast` function from `react-hot-toast` to show notifications when actions like adding/removing items happen.
import { toast } from "react-hot-toast";

// Importing `useDispatch` and `useSelector` hooks from `react-redux` to interact with Redux store state and dispatch actions.

import { useSelector,useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";  // Importing `add` and `remove` actions from CartSlice.

const Product = ({ post }) => {
  // Using `useSelector` to get the current cart state from the Redux store.
  // This gives us access to the `cart` state (which is an array of items in the cart).
  const { cart } = useSelector((state) => state);

  // Using `useDispatch` to get the `dispatch` function, which allows us to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  // Function to add the product to the cart.
  const addToCart = () => {
    // Dispatching the `add` action to add the current product (`post`) to the cart.
    dispatch(add(post));
    // Displaying a success notification using `toast`.
    toast.success("Item added to Cart");
  };

  // Function to remove the product from the cart.
  const removeFromCart = () => {
    // Dispatching the `remove` action with the product's `id` to remove it from the cart.
    dispatch(remove(post.id));
    // Displaying an error notification using `toast`.
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-105 transition
    duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        {/* Displaying the title of the product. */}
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        {/* Displaying a shortened description of the product (only the first 10 words). */}
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        {/* Displaying the product image. */}
        <img src={post.image} className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          {/* Displaying the price of the product in green text. */}
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        
        {/* Conditional rendering: if the product is already in the cart, show the "Remove Item" button, else show the "Add to Cart" button */}
        {
          cart.some((p) => p.id === post.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;

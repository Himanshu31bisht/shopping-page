
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  // Function to remove the item from the cart
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  // Function to increase the quantity of the item
  const increaseItemQuantity = () => {
    dispatch(increaseQuantity(item.id));
    toast.success("Quantity Increased");
  };

  // Function to decrease the quantity of the item
  const decreaseItemQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
      toast.success("Quantity Decreased");
    } else {
      toast.error("Quantity cannot be less than 1");
    }
  };

  // Calculate the total price for this item based on its quantity
  const itemTotalPrice = item.quantity * item.price;

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover" src={item.image} alt={item.title} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {/* Display the price per item */}
              <p className="font-bold text-lg text-green-600">${itemTotalPrice.toFixed(2)}</p>

              {/* Quantity controls */}
              <div className="flex gap-2 items-center">
                <button
                  className="bg-red-400 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                  onClick={decreaseItemQuantity}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-green-400 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                  onClick={increaseItemQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Display total price for this item */}
           

            {/* Delete button */}
            <div
              className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

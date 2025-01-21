import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price* curr.quantity, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
              </p>
            </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount.toFixed(2)}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white 
              transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold
               hover:text-green-700 p-3 text-xl mb-8">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


// import { useSelector } from "react-redux";
// import CartItem from "../components/CartItem";  // Assuming you are rendering `CartItem` components here

// const Cart = () => {
//   const cart = useSelector((state) => state.cart); // Get the cart state from Redux store

//   // Calculate the total price for all items in the cart
//   const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

//   return (
//     <div className="cart-container">
//       {cart.map((item, index) => (
//         <CartItem key={index} item={item} itemIndex={index} />
//       ))}
//       {/* Display the total price of all items in the cart */}
//       <div className="total-price">
//         <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { IoHomeOutline } from "react-icons/io5"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { useRedirect } from "../../hooks/useRedirect";
import { cartItems } from "./cartTypes";
import CartItem from "./CartItem";
import { BillDetail } from "./billDetail";
import { calculateCartPrices } from "../../utils/calculateCartPrices";

const Cart = () => {
    const cartData: cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const { redirect } = useRedirect();
    const cartItemsLength = cartData ? Object.keys(cartData).length : 0;
    const cartDataLength = cartItemsLength > 0;
    const allPrices = calculateCartPrices(cartData);

    return (
        <div className="w-full h-full">
            <div className="sm:m-10 m-2">
                <div className="flex justify-between items-center">
                    <div className="ml-0 text-left w-auto text-2xl my-5">         
                        CART
                    </div>
                    <div className="bg-orange-400 rounded-full p-2 cursor-pointer relative" onClick={() => redirect('/')}>
                        <span className="absolute text-base -top-1 mb-1 rounded-full bg-slate-600 w-6 h-6"><span className="text-white">{cartItemsLength}</span></span>
                        <IoHomeOutline size={28} />
                    </div>
                </div>
                {cartDataLength ?
                    <div className="flex justify-between mt-5 sm:flex-row flex-col">
                        <div className="sm:w-2/4 w-full grid grid-cols-1 gap-6">
                            {Object.keys(cartData).map((key: string) => 
                                <CartItem key={key} id={key} item={cartData[key]}></CartItem>
                            )}
                        </div>
                        <div className="sm:w-2/4 w-full h-full ">
                            <BillDetail allPrices={allPrices}>
                            </BillDetail>
                        </div>
                    </div> :
                    <div>
                        <span className="font-semibold text-orange-500 text-2xl">Shopping Cart is Empty </span>
                        <span className="block text-base">Click <span className="font-semibold text-orange-500 cursor-pointer" onClick={() => redirect('/')}>HERE</span> to continue shopping</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;
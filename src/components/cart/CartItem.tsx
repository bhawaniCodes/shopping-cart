import { FaMinus, FaPlus } from "react-icons/fa6"
import { Item } from "./cartTypes"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { editProduct, removeProduct } from "../../redux/cart/actions/cartActions"
import React from "react"

type CartItemProps = {
    item: Item,
    id: string
}

const CartItem = ({item, id}: CartItemProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const removeFromCart = () => {
        dispatch(removeProduct(parseInt(id)))
    }
    const increaseQuantity = () => {
        dispatch(editProduct(parseInt(id), 'quantity', item.quantity + 1))
    }
    const decreaseQuantity = () => {
        dispatch(editProduct(parseInt(id), 'quantity', item.quantity - 1))
    }

    return (
        <div className="h-36 w-full overflow-hidden bg-gray-50 border-gray-400 border-2 shadow-xl mt-2 flex p-2">
            <div className="w-1/4 text-center sm:mr-0 mr-1" >
                <img src={item.image} alt="product-img" className="h-full m-auto" />
            </div>
            <div className="w-4/6 text-base px-1 flex flex-col justify-center">
                <div className="">
                    <span className="font-semibold w-full block truncate text-left">{item.title}</span>
                </div>
                <div className="w-1/4 text-left">
                    <span className="font-semibold text-orange-500">${item.price}</span>
                </div>
                <div className="w-2/4">
                    <span className="font-semibold w-full block text-left">{item.category}</span>
                </div>
                <div className="font-semibold text-gray-600 text-left flex justify-between w-3/4">
                    <span className="text-left">Quantity</span>
                    <span className="text-right">
                        <FaMinus className="border-2 border-gray-400 border-solid p-1 inline sm:ml-3 ml-1 hover:border-orange-400 hover:text-orange-400" onClick={decreaseQuantity} />
                        <span className="sm:mx-3 mx-1 text-black">{item.quantity}</span>
                        <FaPlus className="border-2 border-gray-400 border-solid p-1 inline hover:border-orange-400 hover:text-orange-400" onClick={increaseQuantity} />
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <RiDeleteBin6Line size={28} className="text-gray-700 hover:text-red-500" onClick={removeFromCart} />
            </div>
        </div>
    )
}

export default React.memo(CartItem);
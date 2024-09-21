import { FaRegStar, FaRegStarHalf, FaStarHalfStroke } from "react-icons/fa6";
import { calculateRatings } from "../../utils/calculateRatings";
import { ProductItemProp } from "./productsTypes";
import { FaStar } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/cart/actions/cartActions";
import { updatedProduct } from "../../redux/products/actions/productsActions";
import { LuLoader2 } from "react-icons/lu";
import React, { useMemo, useState } from "react";


const ProductItem = ({item, id}: ProductItemProp) => {
    const [buttonLoader, setButtonLoader] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const addToCart = () => {
        setButtonLoader(true)
        dispatch(addProduct(id))
        dispatch(updatedProduct(id, 'atcText', 'ALREADY ADDED')),
        setTimeout(() => {
            setButtonLoader(false)
        }, 1000);
    }

    const {fullStars, halfStars, emptyStars} = useMemo(() => 
        calculateRatings(parseFloat(item?.rating?.rate || 0)
    ),[]);

    return (
        <div className="h-96 w-full overflow-hidden bg-gray-50 hover:bg-gray-100 border-gray-400 border-2 shadow-xl mt-2">
            <div className="h-4/6 w-full p-2 text-center" >
                <img src={item.image} alt="product-img" className="h-full m-auto" />
            </div>
            <div className="w-full text-lg sm:text-base px-1 flex">
                <div className="w-3/4">
                    <span className="font-semibold w-full block truncate hover:overflow-visible hover:whitespace-normal text-left">{item.title}</span>
                </div>
                <div className="w-1/4">
                    <span className="font-semibold text-lg">${item.price}</span>
                </div>
            </div>
            <div className="w-full text-base px-1 flex justify-between items-center">
                <div>
                    <span className="font-semibold w-full block text-left">{item.category}</span>
                </div>
                <div>
                    <span className="flex justify-left items-center bg-indigo-200 w-32">
                        {fullStars > 0 && Array(fullStars).fill(null).map((_, idx) => <IoIosStar key={idx} color="yellow" className="text-lg" />)}
                        {halfStars > 0 && Array(halfStars).fill(null).map((_, idx) => <IoIosStarHalf key={idx} color="yellow" className="text-lg" />)}
                        {emptyStars > 0 && Array(emptyStars).fill(null).map((_, idx) => <IoIosStarOutline key={idx} color="yellow" className="text-lg" />)}
                        <span className="ml-2 font-semibold">{item?.rating?.count || 0}</span>
                    </span>
                </div>
            </div>
            <button className={ item.atcText !== 'ALREADY ADDED' ? 'm-3 sm:text-sm text-base bg-orange-400 text-white hover:bg-orange-500 border-none py-1 px-2 rounded-lg text-center' : 'm-3 sm:text-sm text-base bg-orange-200 text-white border-none py-1 px-2 rounded-lg text-center'} disabled={item.atcText === 'ALREADY ADDED'} onClick={addToCart}>
                { buttonLoader ? <span className="flex items-center"><LuLoader2 className="animate-spin inline mr-1" /> Processing... </span> : item.atcText }
            </button>
        </div>
    )
}

export default React.memo(ProductItem)
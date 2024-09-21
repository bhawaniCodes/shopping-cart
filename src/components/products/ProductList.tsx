import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/actions/productsActions";
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "./ProductItem";
import { Item } from "./productsTypes";
import { BsCart4 } from "react-icons/bs";
import { useRedirect } from "../../hooks/useRedirect";


const ProductList = (): any => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state)
    const items: any[]  = data?.products?.items || [];
    const cartItemsLength = data?.cart?.cartItems ? Object.keys(data?.cart?.cartItems).length : 0;

    const { redirect } = useRedirect();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className="w-full h-full">
            <div className="sm:m-10 m-2">
                <div className="flex justify-between items-center">
                    <div className="ml-0 text-left w-auto text-2xl my-5">         
                        PRODUCTS
                    </div>
                    <div className="bg-orange-400 rounded-full p-2 cursor-pointer relative" onClick={() => redirect('/cart')}>
                        <span className="absolute text-base -top-1 mb-1 rounded-full bg-slate-600 w-6 h-6"><span className="text-white">{cartItemsLength}</span></span>
                        <BsCart4 size={28} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {(items && items.length > 0) ? items.map((item: Item) => 
                        <ProductItem key={item.id} id={item.id} item={item}></ProductItem>
                    ) :
                        <div>Loading...</div>   
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList;
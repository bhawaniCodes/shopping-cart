import { Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";

function AppRoutes ():any {
    return (
        <Routes>
            <Route path="/" element={<ProductList></ProductList>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
    )
}

export default AppRoutes;
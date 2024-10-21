import { loginUser, logout, registerUser } from './auth';
import { getProductBySlug } from './products/get-product-by-slug.action';
import { getProductByPage } from './products/get-product-by-page.action';
import { loadProductsFromCart } from './cart';

export const server = {
    // actions

    // Auth
    loginUser,
    logout,
    registerUser,

    // Products
    getProductByPage,
    getProductBySlug,

    //Cart
    loadProductsFromCart,
};
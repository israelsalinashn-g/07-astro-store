import { loginUser, logout, registerUser } from "./auth";
import { getProductBySlug, getProductByPage } from "./products";

export const server = {
    // actions

    // auth
    loginUser,
    logout,
    registerUser,

    // products
    getProductByPage,
    getProductBySlug,
}
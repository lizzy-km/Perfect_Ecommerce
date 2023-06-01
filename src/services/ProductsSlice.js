import {createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";


const initialState = {
    Products:[],
    Cart:[],
    // isLoading:false
};

const STORAGE_KEY_Products = 'Products'
const STORAGE_KEY_Cart = 'Cart'


//____________________________________________________storedUser_____________________Null_____//
const storedProducts = Cookies.get(STORAGE_KEY_Products) ? JSON.parse(Cookies.get(STORAGE_KEY_Products)) : null



//____________________________________________________storedToken_____________________Null_____//
const storedCart = Cookies.get(STORAGE_KEY_Cart) ? JSON.parse(Cookies.get(STORAGE_KEY_Cart)) : null;

if (storedProducts && storedCart) { 
  initialState.Products = storedUser.Products
  initialState.Cart = storedToken.Cart
}


export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        addProducts: (state, {payload} ) => {
            state.Products = [...state.Products,payload];
            Cookies.set(STORAGE_KEY_Products, JSON.stringify(state));
        },
        addCart: (state, {payload} ) => {
            state.Cart = [...state.Cart,payload];
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
        },
        removeProducts: (state, {payload} ) => {
            state.Products = [];
            Cookies.set(STORAGE_KEY_Products, JSON.stringify(state));
        },
        removeCart: (state, {payload} ) => {
            state.Cart = [];
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
        }
    }
})

export const { addProducts,addCart,removeProducts,removeCart } = productSlice.actions
export default productSlice.reducer
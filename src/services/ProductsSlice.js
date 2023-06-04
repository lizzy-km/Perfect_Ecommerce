import {createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";


const initialState = {
    Products:[],
    Cart:[],
    quantity:0,
    totalamount:0,
    // isLoading:false
};

const STORAGE_KEY_Products = 'Products'
const STORAGE_KEY_Cart = 'Cart'


//____________________________________________________storedUser_____________________Null_____//
const storedProducts = Cookies.get(STORAGE_KEY_Products) ? JSON.parse(Cookies.get(STORAGE_KEY_Products)) : null



//____________________________________________________storedToken_____________________Null_____//
const storedCart = Cookies.get(STORAGE_KEY_Cart) ? JSON.parse(Cookies.get(STORAGE_KEY_Cart)) : null;

if (storedProducts && storedCart) { 
  initialState.Products = storedProducts.Products
  initialState.Cart = storedCart.Cart
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

            const isExisted = state.Cart.find((data)=>data.id ===payload.id)

            if (isExisted) {
                return state
            }else{
                state.Cart = [...state.Cart,{ ...payload,quantity:1}];
            }

            
            state.quantity++;
            state.totalAmount += payload.price * payload.quantity;
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));

        },
        removeProducts: (state, {payload} ) => {
            state.Products = [];
            Cookies.set(STORAGE_KEY_Products, JSON.stringify(state));
        },
        removeCart: (state, {payload} ) => {
            state.Cart = state.Cart.filter(
                (data) => data.id !== payload.id
            );
            state.quantity--;
            state.totalAmount -= payload.price * payload.quantity;
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
        },
        addCartQuantity : (state,{payload}) =>{
            state.Cart = state.Cart.map((data)=>{
                if (data.id===payload.id) {
                    return {...data, quantity: data.quantity +1 };
                }else{
                    return data
                }
            })
            state.quantity++;
            state.totalAmount += payload.price * payload.quantity;
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
        }
    }
})

export const { addProducts,addCart,removeProducts,removeCart,addCartQuantity } = productSlice.actions
export default productSlice.reducer
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
  initialState.quantity = storedCart.quantity
  initialState.totalamount= storedCart.totalamount
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
                state.Cart = [...state.Cart,{...payload, quantity:1}];
                // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));

                // payload.quantity +=1;
            }

            
            state.quantity +=1;
            state.totalamount += payload?.price;
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
            // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(payload));


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
            state.totalamount -= payload.price * payload.quantity;
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
            state.totalamount += payload.price;
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
            // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(payload));

        },
        subtractCartQuantity: (state,{payload}) =>{
            const subItem = state.Cart.find((item) =>item.id === payload.id );
            if (subItem.quantity > 1) {
                state.Cart = state.Cart.map((item) =>{
                    if (item.id === payload.id && payload.quantity > 1) {
                        return{...item,quantity:item.quantity -1};

                        // state.quantity--;
               
                        
                    }else{
                        return item
                    }
                });
            }
          
            if (payload.quantity > 1) {
                state.quantity--;
                state.totalamount -=payload.price


                
            }
            Cookies.set(STORAGE_KEY_Cart, JSON.stringify(state));
            // Cookies.set(STORAGE_KEY_Cart, JSON.stringify(payload));

        }
    }
})

export const { addProducts,addCart,removeProducts,removeCart,addCartQuantity,subtractCartQuantity } = productSlice.actions
export default productSlice.reducer
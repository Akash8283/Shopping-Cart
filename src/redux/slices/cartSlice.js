import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        //addToCart action.payload is product to be added in acrt
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if (existingProduct) {
                existingProduct.quantity ++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // 
        removeCartItem:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        // increment quantity action payload has product
        incrementCartItem:(state,action)=>{
           const existingproduct = state.find(item=>item.id==action.payload.id)
           existingproduct.quantity++
           existingproduct.totalPrice = existingproduct.price *existingproduct.quantity
           const remainingProduct = state.filter(item=>item.id!=existingproduct.id)
           state = [...remainingProduct,existingproduct]
        },
        // increment quantity action payload has product
        decrementCartItem:(state,action)=>{
           const existingproduct = state.find(item=>item.id==action.payload.id)
           existingproduct.quantity--
           existingproduct.totalPrice = existingproduct.price *existingproduct.quantity
           const remainingProduct = state.filter(item=>item.id!=existingproduct.id)
           state = [...remainingProduct,existingproduct]
        },
        emptyCart:(state)=>{
            return[]
        }
    }
})

export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer
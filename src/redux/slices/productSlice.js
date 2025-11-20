import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action with asynchronus function call
 export const getallproducts = createAsyncThunk('products/getallproducts',async()=>{
       const result = await axios.get("https://dummyjson.com/products")
    //    console.log(result.data.products);
       sessionStorage.setItem('products',JSON.stringify(result.data.products))
       return result.data.products
   })

   const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:true,
        error:""
    },
    reducers:{
    // action are synchronus
    },
    extraReducers:(builder)=>{
        builder.addCase(getallproducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(getallproducts.pending,(state,action)=>{
            state.allProducts = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(getallproducts.rejected,(state,action)=>{
            state.allProducts = []
            state.loading = false
            state.error = "Something went Wrong!!! API called Failed"
        })
    }

})

export default productSlice.reducer
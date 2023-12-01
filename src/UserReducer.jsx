import { createSlice } from "@reduxjs/toolkit";
import { productList } from "./Data";

const userSlice = createSlice({
    name: "product",
    initialState: productList,
    reducers:{
        addProduct: (state, action) =>{
            state.push(action.payload);
        },
        updateProduct:(state, action) =>{
            const {id, productName, brand, category, description, price} = action.payload
            const updatedProduct = state.find(product => product.id == id)
            if(updatedProduct){
                updatedProduct.productName = productName;
                updatedProduct.brand = brand;
                updatedProduct.category = category;
                updatedProduct.description = description;
                updatedProduct.price = price;
            }
        },
        deleteProduct:(state, action) =>{
            const {id} = action.payload;
            const updatedProduct = state.find(product => product.id == id)
            if(updatedProduct){
                return state.filter(product => product.id !== id)
            }
        }
    }
})

export const {addProduct, updateProduct, deleteProduct} = userSlice.actions;

export default userSlice.reducer
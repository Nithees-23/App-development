import { createSlice } from "@reduxjs/toolkit";
export const userSlice =createSlice({
    name:"user",
    initialState:{
        user: null,
        item:[],
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        addproduct:(state,action)=>{
            state.item.push(action.payload);
          },
          removeproduct:(state,action)=>{
            state.item=state.item.filter((product)=> product.id !== action.payload);
          },
    },
}
);
export const {login,logout,addproduct,removeproduct}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export const getProduct=(state)=>state.user.item;
export default userSlice.reducer;

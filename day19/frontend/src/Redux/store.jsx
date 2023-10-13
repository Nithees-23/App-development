import { configureStore,combineReducers } from '@reduxjs/toolkit'
import AdminReducer from './Redux'
const reducer = combineReducers({
    adminInfo:AdminReducer
})
export const store  = configureStore({
    reducer,
})
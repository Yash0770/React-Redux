import { ADD_TO_CART } from "../constants"
export const addToCart = (data)=>{
    // console.log('action',data);
    return{
        type: ADD_TO_CART,
        data
    }
}

// export const new1 = (data)=>{
//     return{
//         type:'REMOVE_TO_CART',
//         data
//     }
// }
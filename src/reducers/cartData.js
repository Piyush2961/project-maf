import { GET_LOGIN_DATA, SET_CART_DATA } from "../constants";

export const getLoginData= (state=[],action)=>{

  switch (action.type){
      case GET_LOGIN_DATA : 
      return state=action.payload;
      default :
      return state;
  }
}
export const getProductData = (sate=[],action)=>{
    switch ( action.type){
        case SET_CART_DATA:
        return sate = action.payload;
        default:
            return sate;
    }
}
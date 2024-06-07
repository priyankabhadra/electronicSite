import { DELETE, UPDATE, SAVE } from "./action";
import {mockData} from '../data';

const initialState = {
    mockData,
};

const counterReducer = (state = initialState, action) => {
    console.log({action})
  switch (action.type) {
    case DELETE: 
    return {
        ...state,
        mockData: state.mockData.filter((elemen) => elemen.id !== action.payload)
    }
    case UPDATE:
        const flag = action?.payload?.newField || '';
        return {
            ...state,
            mockData: state.mockData.map((element) =>
            element.id === action.payload.element.id 
              ? { 
                  ...element, 
                  flag
                }
              : element
          )
          };

     case SAVE: 
     return {
        ...state,
        mockData: state.mockData.map((element) =>
        element.id === action.payload.element.id
        ? { 
            ...element, 
            name: action.payload.updatdValue ,
            flag: ''
          }
        : element
   )
     }
    default:
      return state;
  }
};

export default counterReducer;
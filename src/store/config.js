import {combineReducers,createStore} from 'redux'
// import { demoRedux } from './reducers/demoReduc';
// import { baiTapXe } from './reducers/btXe';
// C1:
// import {demoRedux,BTXe} from './reducers'

// C2:
import * as reducers from './reducers';


const rootReducer = combineReducers({
    // C1

    // demoRedux:(state=1,action)=>{
    //     console.log(action);
    //     switch (action.type){
    //         case 'Tăng':{
    //             state += action.payload
    //             return state
    //         }
    //         case 'Giảm':{
    //             state += action.payload
    //             return state
    //         }

    //         default:return state
    //     }
    //     // return state;
    // },
    // baiTapXe:(state="./img/products/black-car.jpg",action)=>{
    //     switch (action.type){
    //         case 'CHANGE_COLOR':{
    //             state = `./img/products/${action.payload}-car.jpg`
    //             return state
    //         }
    //         default:return state
    //     }
    // },

    // C2
    
    ...reducers,
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
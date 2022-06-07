
import {createStore, compose} from 'redux';
import { rootReducer } from '../reducer/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}   
const commonData = {
  user:{
    items:[{
      name:'test',
      email:'test@gmail.com',
      password:'test1234',
    }],
    auth:false
  },
  
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,commonData,composeEnhancers())

// const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store);
export   { store , persistor }




// import { combineReducers, createStore } from 'redux'
// import userReducer from '../features/userReducer'
// import {composeWithDevTools} from 'redux-devtools-extension'

// const mainReducer = combineReducers({
//   user:userReducer,
// })

// const commonData = {
//   user:{
//     items:[{
//       name:'test',
//       email:'test@gmail.com',
//       password:'test1234'
//     },
//     ]
//   }
// }

// const store = createStore(mainReducer,commonData,composeWithDevTools())

// export default store
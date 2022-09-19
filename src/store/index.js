import { 
    createStore, 
    applyMiddleware 
} from "redux";
import reducer from '../reducers';
import { createLogger } from "redux-logger";

const store = createStore(
    reducer,
    applyMiddleware(createLogger())
);


store.subscribe(() => {
    console.log(store.getState());
});

export default store;
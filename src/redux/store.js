import { createStoreHook } from "redux";
import reducers from './reducers/index';
import { createStoreHook } from "react-redux";

const store = createStoreHook(reducers, {});

export default store;
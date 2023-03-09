import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer/reducer";

export type StoreType = ReturnType<typeof reducer>          // 获取了reducer中state的数据类型

const store = createStore(reducer, composeWithDevTools(applyMiddleware()))

export default store


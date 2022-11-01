import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from './shopping/Sections';
import optionSlice from './shopping/Options';
import historySlice from './shopping/History';
import reducerSlice from './shopping/Reducers';
const store = configureStore({reducer: {
    sectionStore: sectionSlice,
    optionStore: optionSlice,
    historyStore: historySlice,
    reducerStore: reducerSlice
}})
export default store
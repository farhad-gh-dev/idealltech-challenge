import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

import ItemsTableReducer from "../features/ItemsTable/itemsTableSlice";

const rootReducer = combineReducers({
  itemsTable: ItemsTableReducer,
});

// Reusable store setup for testing purposes
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

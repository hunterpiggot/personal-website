// import { RequestState } from "./../../components/climate-dashboard/natural-events/natural-events-slice/NaturalEventsSlice.interface";
// file: src/store/root/Root.store.ts

import {
  combineReducers,
  configureStore,
  Action,
  AnyAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import naturalEventsStore from "@/components/climate-dashboard/natural-events/natural-events-slice/NaturalEvents.slice";
import { IRootStore } from "./RootStore.interface";

const combinedReducer = combineReducers({});

const initialState = {};

const reducer = (state = initialState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export const rootStore = () =>
  configureStore({
    reducer,
    preloadedState: initialState,
  });

export type IAppStore = ReturnType<typeof rootStore>;
export type IRootState = ReturnType<IAppStore["getState"]>;
export type IAppDispatch = IAppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

export function useAppStore(): IRootStore {
  const commit = useDispatch();
  return {};
}

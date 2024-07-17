import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";

// для комфортной работы с типами
export const useAppDispatch = () => useDispatch<AppDispatch>(); // типизированный Dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // типизированный Selector

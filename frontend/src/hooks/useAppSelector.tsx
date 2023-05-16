import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useAppSelector = <T,>(selector: (state: RootState) => T): T => {
  const state = useSelector(selector);
  return state;
};

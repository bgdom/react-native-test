import { RootState } from "../../models/RootState";
import { UserState } from "../../models/useSliceData";
import { initialState } from "./userSlice";

export const selectUserState = (state: RootState): UserState => state.userState || initialState

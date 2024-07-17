import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  // count: number; // COUNTER
}

const initialState: IUserState = {  // дефолтное состояние стэйта
  users: [],
  isLoading: false,
  error: '',
  // count: 0,// COUNTER
}

// reducer или в toolkit это Slice
export const userSlice = createSlice({
  name: 'user', // ВАЖНО!!! должно быть уникальным
  initialState,
  reducers: { // switch-case как в обычном reducer
    // COUNTER
    /*    increment( state, action: PayloadAction<number>) {
            state.count += action.payload;
        }*/
    // COUNTER

    // USERS REDUCERS
    /*
       usersFetching(state) {
          state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
          state.isLoading = false;
          state.error = ''
          state.users = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {
          state.isLoading = false;
          state.error = action.payload;
        },
        */
    // USERS REDUCERS

  },
  extraReducers: {
    // USERS EXTRAREDUCERS
     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
       state.isLoading = false;
       state.error = ''
       state.users = action.payload;
     },
     [fetchUsers.pending.type]: (state) => {
       state.isLoading = true;
     },
     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload
     },
    // USERS EXTRAREDUCERS
  }
})

export default userSlice.reducer;

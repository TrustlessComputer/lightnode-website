import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserState } from './types';

const initialState: UserState = {
  user: undefined,
};

const slice = createSlice({
  name: 'USER_STATE',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

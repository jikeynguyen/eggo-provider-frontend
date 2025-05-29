import { UserSession } from '@/generated';
import { createSlice } from '@reduxjs/toolkit';
import { me } from './auth.thunk';

// Type for our state
export interface IAuthState {
  user?: UserSession | null;
  isLoading?: boolean;
  limitQuota: {
    restaurant: number;
    menu: number;
    billingInfo: number;
  };
}

// Initial state
const initialState: IAuthState = {
  user: null,
  isLoading: true,
  limitQuota: {
    restaurant: 0,
    menu: 0,
    billingInfo: 0,
  },
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      const user = action.payload;
      state.user = user;

      state.isLoading = false;
    });

    builder.addCase(me.rejected, (state) => {
      state.user = null;
      state.isLoading = false;
    });

    builder.addCase(me.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;

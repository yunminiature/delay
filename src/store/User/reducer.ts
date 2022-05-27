import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {User} from "./types";
import {signOut, signUp} from "./actions";

const initialState: User = {} as User

const userReducer = createReducer<User>(initialState,{
  [signUp.type]: (state, action: PayloadAction<User>) => {
    const {email, username, password, gender} = action.payload
    state.email = email
    state.username = username
    state.gender = gender
    state.password = password
  },

  [signOut.type]: (state) => {
    state = {} as User
  }
})

export default userReducer
import {createAction} from '@reduxjs/toolkit';
import {ActionTypes, User} from "./types";

export const signUp = createAction<User>(ActionTypes.SIGN_UP)

export const signOut = createAction(ActionTypes.SIGN_OUT)
export const enum ActionTypes {
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT"
}

export const enum GenderTypes {
  MAN = "MAN",
  WOMAN = "WOMAN"
}

export interface User {
  email: string,
  username: string,
  password: string
  gender: GenderTypes
}
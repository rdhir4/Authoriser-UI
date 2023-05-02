import { type } from "os";
import axiosInstance from "../../Services/axios";
import { ILoginResponse } from "./auth.state";

export enum AuthActions {
    SET_AUTH = 'SET_AUTH',
    SIGNIN_REQUEST = 'SIGNIN_REQUEST',
    SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
    SIGNIN_FAIL = 'SIGNIN_FAIL'
}

export interface SetAuth {
    type: typeof AuthActions.SET_AUTH,
}

export interface SignInRequest {
    type: typeof AuthActions.SIGNIN_REQUEST
}

export interface SignInSuccess {
    type: typeof AuthActions.SIGNIN_SUCCESS,
    payload: ILoginResponse,
}

export interface SignInFail {
    type: typeof AuthActions.SIGNIN_FAIL
}

export type AuthActionTypes =
    SetAuth
    | SignInRequest
    | SignInSuccess
    | SignInFail
  
export const setAuth = (): AuthActionTypes => ({
    type: AuthActions.SET_AUTH
})    

export const signInRequest = (): AuthActionTypes => ({
    type: AuthActions.SIGNIN_REQUEST
})

export const signInSuccess = (payload: ILoginResponse): AuthActionTypes => ({
    type: AuthActions.SIGNIN_SUCCESS,
    payload,
})

export const signInFail = ():AuthActionTypes => ({
    type: AuthActions.SIGNIN_FAIL,
})

// api calls

export const signIn = (userInput: string, password: string) => async (dispatch: Function) => {
    dispatch(signInRequest)
    axiosInstance.post('http://localhost:81/signIn', {
        UserInput: userInput,
        Password: password
    }).then((res) => { console.log(res) 
        return dispatch(signInSuccess(res as unknown as ILoginResponse))})
    .catch(() => dispatch(signInFail))
}
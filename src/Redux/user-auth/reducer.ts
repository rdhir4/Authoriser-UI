import { AuthActions, AuthActionTypes } from "./action";
import { AuthState } from "./auth.state";
import {
    clone
  } from 'lodash';

const InitialAuthState: AuthState = {
    token: '',
    userAttributes: {
        UserName: '',
        Name: '',
        Email: ''
    },
    isLoadingSignIn: false,
}

const AuthReducer = (state: AuthState = InitialAuthState, action: AuthActionTypes): AuthState => {
switch(action.type) {
    case  AuthActions.SET_AUTH: {
        return state
    }

    case AuthActions.SIGNIN_REQUEST: {
        const newState = clone(state)
        newState.isLoadingSignIn = true
        return newState
    }

    case AuthActions.SIGNIN_SUCCESS: {
        const newState = clone(state)
        const { Token, UserName, Email, Name } = action.payload
        const userAttributes = newState.userAttributes
        userAttributes.UserName = UserName
        userAttributes.Email = Email
        userAttributes.Name = Name
        newState.userAttributes = userAttributes;
        newState.isLoadingSignIn = false
        newState.token = Token
        return newState;
    }

    case AuthActions.SIGNIN_FAIL: {
        const newState = clone(state)
        newState.isLoadingSignIn = false
        return newState
    }
    default: {
        return state
    }
}
}

export default AuthReducer
export interface AuthState {
    token: string;
    userAttributes: IUserAttributes;
    isLoadingSignIn: boolean;
}

export interface IUserAttributes {
    Name: string;
    UserName: string;
    Email: string;
}

export interface ILoginResponse {
    Name: string;
    UserName: string;
    Email: string;
    Token: string;
}
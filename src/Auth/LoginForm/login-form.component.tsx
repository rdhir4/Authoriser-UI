import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { signIn } from "../../Redux/user-auth/action";
import { Password, SignIn, SignInDesc, Username } from "../Constants/constants"
import StyledLoginForm from "./login-form.styled";

const Login = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const clickHandler = () => {
    console.log(userInput, password)
    dispatch(signIn(userInput, password) as unknown as AnyAction)
  }

  return (
  <StyledLoginForm>  
    <div className="container">
      <div className="login-form-header-cn">
        <div className="signin-label">
          {SignIn}
        </div>
        <div className="signin-desc">
          {SignInDesc}
        </div>
      </div>
      <div className="login-form-cn">
        <input placeholder={Username} className="in-username" onChange={(event) => setUserInput(event.currentTarget.value)}></input>
        <input type="password" placeholder={Password} className="in-password" onChange={(event) => setPassword(event.currentTarget.value)}></input>
      </div>
      <div className="login-form-footer">
        <button onClick={clickHandler}>SignIn</button>
      </div>
    </div>
  </StyledLoginForm>
  )
}

export default Login;
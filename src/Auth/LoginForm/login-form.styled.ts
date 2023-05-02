import styled from "styled-components";

const StyledLoginForm = styled.div`
min-height: 100vh;
justify-content: center;
align-items: center;
display: flex;

.container {
    border: 1px solid var(--borderColor);
    border-radius: 8px;
    padding: 35px;
    width: fit-content;

    .login-form-header-cn {
        margin-bottom: 30px;
        .signin-label {
            font: 25px Regular;
        }
        .signin-desc {
            font: 16
        }
    }

    .login-form-cn {
        input {
            width: 100%;
            font:13px Regular;
            color: var(--headerColor);
            border-radius: 2px;
            border: 1px solid var(--inputBorderColor);
            min-height: 32px;
            padding: 0 8px 0 12px;
            box-sizing: border-box;
            outline: none;
            margin-top: 8px;
        }
    }

    .login-form-footer {
        button {
            width: 100%;
            padding: 8px 11px;
            font: 13px Regular;
            color: var(--whiteColor);
            background-color: var(--loginButtonColor);
            border: none;
            border-radius: 2px;
            margin-top: 38px;

            :hover {
                background-color: var(--onHoverLogin);
            }
        }
    }
}
`

export default StyledLoginForm;
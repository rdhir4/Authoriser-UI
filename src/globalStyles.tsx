import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<DefaultProps>`

@font-face {
    font-family: Regular;
    src: url("https://lsqappcommoncontent.s3-ap-southeast-1.amazonaws.com/leadsquared/common/fonts/SegoeUI/segoeui.ttf") format("truetype");
  }
  
  @font-face {
    font-family: Bold;
    src: url("https://lsqappcommoncontent.s3-ap-southeast-1.amazonaws.com/leadsquared/common/fonts/SegoeUI/segoeuib.ttf") format("truetype");
  }

  @font-face {
    font-family: SemiBold;
    src: url("https://lsqappcommoncontent.s3-ap-southeast-1.amazonaws.com/leadsquared/common/fonts/SegoeUI/seguisb.ttf") format("truetype");
  }

  body {
    margin: 0;
    font-family:"Regular", "sans-serif";
    background:${(props) => props.theme.body};

    button {
      cursor: pointer;
    }
  }

  :root{
    --base-font-color: ${(props) => props.theme.headerColor};
    --borderColor: ${(props) => props.theme.borderColor};
    --inputBorderColor: ${(props) => props.theme.inputBorderColor};
    --whiteColor: ${(props) => props.theme.white};
    --loginButtonColor:  ${(props) => props.theme.loginButtonColor};
    --onHoverLogin: ${(props) => props.theme.onHoverLogin};
    }
`

export interface DefaultProps {
    theme:Itheme
}

export interface Itheme {
body: string;
headerColor: string;
borderColor: string;
inputBorderColor: string;
white: string;
loginButtonColor: string;
onHoverLogin: string;
}    

export default GlobalStyle;
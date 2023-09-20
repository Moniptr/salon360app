import style from "../Textheading/textheading.module.css";
import {css} from "@emotion/react";
/**@jsxImportSource @emotion/react */

const Textheading=({Text="About-us", 
color="FFFFFFFF",
fontSize="30px",
fontFamily="R.font.dm sans",
fontWeight="500",
lineHeight="38px" })=>{
    const Texthead=css`color: ${color};
    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};`

    return(
        <>
        <h1 css={Texthead}>{Text}</h1>
        </>
    )
};
export default Textheading;
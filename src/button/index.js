import style from "../button/button.module.css";
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({label="New Sale",
background="#CCAA6D", 
color="0xFF191921", 
fontSize="14px",
fontWeight="500",
fontFamily="R.font.dm sans",
padding="10px 14px 10px 14px",
lineHeight="2.4rem",
marginRight="30px",
borderRedius="10px"
}) => {
    const btnstyle = css`background: ${background || ""}; 
    color: ${color}; 
    font-size: ${fontSize};
    padding: ${padding};
    font-weight: ${fontWeight};
    font-family: ${fontFamily};
    line-height: ${lineHeight};
    margin-right: ${marginRight};
    border-radius: ${borderRedius};`
    return(
    <>
    <button css={btnstyle}>{label}</button>
    </>
    ) 
};
export default Button;
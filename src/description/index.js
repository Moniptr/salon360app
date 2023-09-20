import {css} from "@emotion/react";
import style from "../description/description.module.css"
/**@jsxImportSource @emotion/react */

const Descriptiontext =({para="this is the description for about us",
color="FFFFFFFF",
fontweight="400",
fontFamily="R.font.dm sans",
fontSize="14px",
lineHeight="24px"}) =>{
    const Description=css`color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontweight};
    font-family: ${fontFamily};
    line-height: ${lineHeight}`
    return(
        <>
        <div>
        <p css={Description}>{para}</p>
        </div>
        </>
    )
};
export default Descriptiontext;
import style from "../subHead/subtext.module.css";
import {css} from "@emotion/react";
/**@jsxImportSource @emotion/react */

const Subhead=({subheading="Monthly Expenses & Inventory",color="FFFFFFFF",
fontweight="500",
fontFamily="R.font.dm sans",
fontSize="22px",
lineHeight="28px"})=>{
    const subheadingmoney=css`color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontweight};
    font-family: ${fontFamily};
    line-height: ${lineHeight};`
    return(
        <>
            <h4 css={subheadingmoney}>{subheading}</h4>
        </>
    )
};
export default Subhead;
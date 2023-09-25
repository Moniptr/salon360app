import {css} from "@emotion/react";
/**@jsxImportSource @emotion/react */
import styles from "../header/header.module.css";
// import Container from "../container";
import {Image } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "../../components/container/index";

const Header=()=>{
    return(
      <Container background="rgba(36, 40, 52, 1)" inline={true} >
      <div className={styles.headermain}>
      
      <div className="conainerhead d-flex align-items-center ml-4" > 
      <Image className={styles.parlourimage} src="/images/parlour.svg" />
      </div>
      <div className={styles.endsection}>
      
      <Dropdown className=" mx-4" data-bs-theme="dark">
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Trinity Saloon, Kharadi
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <div className={styles.con1}>
        
           <p class={styles.icontext}>KB</p>

     </div>
  </div>
      </div>
      </Container>

    )
};
export default Header; 
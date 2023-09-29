import {css} from "@emotion/react";
/**@jsxImportSource @emotion/react */
import styles from "../header/header.module.css";
// import Container from "../container";
import {Image } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "../../components/container/index";
import Button from "../Button";
import IcPlus from "../../design-system/icons/IcPlus";

const Header=()=>{
    return(
      <Container background="rgba(36, 40, 52, 1)" inline={true} width="100%" >
      <div className={styles.headermain}>
      <div className={styles.parlourimage}> 
      <Image src="/images/parlour.svg" />
      </div>
      <div className={styles.rightsection}>
      <Button className="mx-2 my-3" label="New Sale" />
      <Dropdown className=" mx-6 my-3" data-bs-theme="dark">
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
      <div className={styles.imageicon}>
        <p class={styles.icontext}>KB</p>
      </div>
  </div>
      </div>
      </Container>
        )
};
export default Header; 
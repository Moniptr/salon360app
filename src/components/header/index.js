import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Image,
  Dropdown,
} from "react-bootstrap";
import "../header/header.css";
import IcPlus from "../../design-system/icons/IcPlus";
import Button from "../Button/index";

const Header = () => {
  return (
    <div>
      <Navbar className="Navmain" >
        <Container>
          <Image className="mx-0" src="/images/parlour.svg" alt="Logo" />

          <Navbar.Brand className=" mx-0 rightsection">
            <Button size="medium" label="New Sale" icon={<IcPlus/>} />

            <Dropdown className=" mx-4 my-3" data-bs-theme="dark">
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
           <div className="imageicon">
               <p className="icontext">KB</p>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>

      
        
    </div>
  );
};

export default Header;
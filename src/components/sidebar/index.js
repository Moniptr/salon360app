import React, { useState } from "react";
import IcPlus from "../../design-system/icons/IcPlus/index";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import "./sidebar.css";
import "../../App.css";
import ButtonComponent from "../buttonC";
import { Icon } from "../icon/icon";
import Text from "../text";
import IcParlour from "../../design-system/icons/IcParlour";
import IcVectordash from "../../design-system/icons/IcVectordash";
import Icvectorreport from "../../design-system/icons/Icvectorreport";
import IcVectorservice from "../../design-system/icons/IcVectorservice";
import IcVectorPayment from "../../design-system/icons/IcVectorPayment";
import IcVectorstaff from "../../design-system/icons/IcVectorstaff";
import IcVectorstore from "../../design-system/icons/IcVectorstore";
import IcVectorrefferal from "../../design-system/icons/IcVectorrefferal";
import Aboutus from "../../about-us";
import Knowmore from "../../knowmorecontent";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="app-main">
      <Navbar className="app-header">
        <Container fluid>
          <Image src="your-logo.png" alt="Logo" />
          <Navbar.Brand className="maincontainer">
            <Button onClick={toggleSidebar} className="d-md-none">
              ☰
            </Button>
            <ButtonComponent size="medium" label="New Sale" icon={<IcPlus/>} />
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

      <Row className="m-0">
        <Col md={2} className="col1 m-0 p-0">
          <div className="">
            <div className={`sidebar ${showSidebar ? "show" : ""}`}>
              <ListGroup className="sidebar-items ">
                {setShowSidebar && (
                  <Button
                    onClick={closeSidebar}
                    className="close-button d-md-none"
                  >
                    &times;
                  </Button>
                )}

                <ListGroup.Item className="d-flex mb-5 mt-3  sidebar-item">
                  <Icon ic={<IcParlour />} />{" "}
                  
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectordash />} /> <div className="m-0 ">Dashboard </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<Icvectorreport />} /> <div className="m-0 ">Report</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorservice />} /> <div className="m-0 ">Service </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorPayment  />} /> <div className="m-0 ">Payment Modes</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorstaff />} /> <div className="m-0 ">My Staff</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorstore />} /> <div className="m-0 ">My Store</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorstore />} /> <div className="m-0 ">Settings</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcVectorrefferal />} /> <div className="m-0 ">Referrel</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <ButtonComponent
                    size="medium"
                    label="App Details"
                    prefix={<IcPlus />}
                    justifyContent="start"
                    gap="20px"
                    paddingLeft="10px"
                  />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>

        <Col md={10} className=" m-0 mt-5  pt-2">
          <Text
            className="my-4 mx-4 m-1 ps-2"
            appearance="heading_s_medium"
            color="#FFF"
            text="App Details"
          />
         

            <div className="app-details-section">
 {/* About Section */}
    <Aboutus />
    <br/>
    <br/>
{/* Monthly investment */}
            <Row className="m-0 p-0 align-items-center mb-5 ">
              <Col sm={7} className="m-0">
                <div className="">
                  <ListGroup className="monthlyExpenses-section">
                  <Text text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                  <br/>
                    <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                    <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                    <Text text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                    <br/>
                    <Text text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                   <Text text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                  <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                   <br/>
                    <ButtonComponent
                      label="Know More"
                      size="medium"
                      className="monthly-img-container"
                    />
                  </ListGroup>
                </div>
              </Col>

              <Col sm={5} className="m-0">
                <div className="">
                  <Image
                    src="/images/rectangleimage.png"
                    alt="Right Side Image"
                    fluid
                  />
                </div>
              </Col>
            </Row>
            <Row className="m-0 p-0 align-items-center">
              <Col sm={7} className="m-0 monthly-img-container">
                <div className="">
                  <Image
                    src="/images/Rectangle 7668.png"
                    alt="Right Side Image"
                    fluid
                  />
                </div>
              </Col>
              <Col sm={5} className="m-0 ">
                <div className="">
                  <ListGroup className="monthlyExpenses-section">
                  <Text text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                  <br/>
                  <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                  <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                  <Text text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                  <br/>
                 <Text text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                  <Text text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                  <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                   <br/>

                    <ButtonComponent
                      label="Know More"
                      size="medium"
                    />
                  </ListGroup>
                  
                </div>
              </Col>
            </Row>

{/* Knowmore Section */}
<br/>
<Knowmore />

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SideBar;

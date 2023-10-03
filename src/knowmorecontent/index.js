import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Image} from "react-bootstrap";
import "../knowmorecontent/knowmore.css";
import Text from "../components/text/index"
import IcVectorstaff from "../design-system/icons/IcVectorstaff";
import { Icon } from "../components/icon/icon";
import IcVectorrefferal from "../design-system/icons/IcVectorrefferal";
import IcAppoinment from "../design-system/icons/IcAppoinment";
import BackgroundIcon from "../components/backgroundIcon";


const Knowmore = () => {
  return (
  <Container className="knowmaincontainer">
      <Text className="knowtext" text="Know more about our Features" appearance="heading_l_medium" color="white" />
      <Row className="knowboxes">
        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <div className="knowimage">
                <Image src="images/Ellipse 646 (1).png"/>
                <div className="knowiconimage">
                  <Icon ic={<IcAppoinment />} /></div>
              </div>

              <Card.Title>
              <Text className="knowtext" text="Appoinment" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications." appearance="body_s_regular" color="white" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
            <BackgroundIcon  Icon/>
              <Card.Title><Text className="knowtext" text="Services" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Create a catalogue for your clients covering a broad range of
                services to choose from." appearance="body_s_regular" color="white" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
            <BackgroundIcon icon={<IcAppoinment/>} />
              <Card.Title><Text className="knowtext" text="Packages" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Create customized packages for your clients and run discount
                offers to increase customer retention." appearance="body_s_regular" color="white" />
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
            <div className="knowimage">
                <Image src="images/Ellipse 646 (1).png"/>
                <div className="knowiconimage">
                  <Icon ic={<IcVectorrefferal />} /></div>
              </div>
              <Card.Title><Text className="knowtext" text="Marketing" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Send promotional offers, newsletters, and other marketing
                messages to customers, as well as to track the effectiveness of
                these campaigns." appearance="body_s_regular" color="white" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
            <div className="knowimage">
                <Image src="images/Ellipse 646 (1).png"/>
                <div className="knowiconimage">
                  <Icon ic={<IcVectorrefferal />} /></div>
              </div>
              <Card.Title><Text className="knowtext" text="Subscription" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Enroll in an annual subscription to leverage all the unlimited
                benefits for the smooth functioning of your business." appearance="body_s_regular" color="white" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
            <div className="knowimage">
                <Image src="images/Ellipse 646 (1).png"/>
                <div className="knowiconimage">
                  <Icon ic={<IcVectorrefferal />} /></div>
              </div>
              <Card.Title><Text className="knowtext" text="Subscription" appearance="body_l_regular" color="white" /></Card.Title>
              <Card.Text>
              <Text className="knowtext" text="Enroll in an annual subscription to leverage all the unlimited
                benefits for the smooth functioning of your business.." appearance="body_s_regular" color="white" />
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Knowmore;

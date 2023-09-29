import React from "react";
import styles from "../knowmorecontent/Knowmore.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Container from "../components/container";
import { Card, Col, Row } from "react-bootstrap";
import Text from "../components/text";


const Knowmore=()=>{
    return(
        <>
        <Container>
      <Text text="Know more about our Features" appearance="heading_l_medium" color="white" />
      <Container className= {styles.knowmaincontainer }>
      <Row>
        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className={styles.knowcolumn}>
          <Card>
            <Card.Body className={styles.knowboxes}>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
    </Container>
    </>
    )
}
export default Knowmore;
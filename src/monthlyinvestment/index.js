import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Image,
  ListGroup,
} from "react-bootstrap";
import styles from "../monthlyinvestment/monthlyinvest.module.css";
import Text from "../components/text";
import Container from "../components/container";
import Button from "../components/Button";
import IcPlus from "../design-system/icons/IcPlus";

const Monthly = () => {
  return (
    <div>
      <Container background="rgba(36, 40, 52, 1)">
        <Row>
          <Col md={8}>
          <Text className={styles.monthlytext} text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                <br/>
                <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                <Text text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                <br/>
                <Text text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                <Text text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                <br/>
                <Button size="medium" icon = {<IcPlus />} label="Know more"></Button>
          </Col>

          <Col md={4} className="order-md-2 order-1">
            <Image
              src="/images/rectangleimage.png"
              alt="Right Side Image"
              fluid
            />
        
          </Col>
        </Row>

        
      </Container>

      <Container background="rgba(36, 40, 52, 1)">
        <Row>
          

          <Col md={4}>
            <Image
              src="/images/rectangleimage.png"
              alt="Left Side Image"
              fluid
            />
          </Col>

          <Col md={8} className="order-md-2 order-1">
          <Text className={styles.secondmontext} text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                <br/>
                <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                <Text text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                <br/>
                <Text text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                <Text text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                <br/>
                <Button size="medium" icon = {<IcPlus/>} label="Know more"></Button>
             </Col>
        </Row>
</Container>
    </div>

    
  );
};

export default Monthly;

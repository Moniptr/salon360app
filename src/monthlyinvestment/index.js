import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Image
} from "react-bootstrap";
import "../monthlyinvestment/monthly.css";
import Text from "../components/text";
import Container from "../components/container";
// import Button from "../components/Button";

const Monthly = () => {
  return (
    <div>
      <Container background="rgba(36, 40, 52, 1)">
        <Row className="monthlyrow">
          <Col md={6} className="monthlycolumn">
          <Text className="monthlytext" text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                <br/>
                <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                <Text text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                <br/>
                <Text text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                <Text text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                <br/>
                {/* <Button size="medium" label="Know more" /> */}
          </Col>

          <Col md={6}>
            <Image className="monthlyimage"
              src="/images/rectangleimage.png"
              alt="Right Side Image"
              fluid
            />

          </Col>
        </Row>
</Container>

  <Container background="rgba(36, 40, 52, 1)">
    <Row className="monthlysecondrow">
      <Col className="monthlysecondcolimage" md={6}>
         <Image className="monthlysecondimage"
           src="/images/rectangleimage.png"
            alt="Left Side Image"
              fluid
          />
        </Col>

        <Col md={6} className="monthlysecondcoltext">
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
                {/* <Button size="medium" label="Know more" /> */}
             </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Monthly;

import React from "react";
import "../business partner/business.css";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Text from "../components/text";

const Business = ()=>{
    return(
        <>
        <div className="busimaincont">
        <Container className="busicontainer" >
        <Row className="">
          <Col md={6} className=" busifirstcol">
          <Text text="Refer your Salon Business Partners" appearance="heading_m_medium" color="white" />
            <br/>
          <Text text="Whether you are a small independent salon or a large spa chain, our " appearance="body_s_regular" color="white" />
          <Text text="salon management app can help you achieve your business goals by" appearance="body_s_regular" color="white" />
          <Text text="streamlining your operations, improving your customer engagement," appearance="body_s_regular" color="white" />
          <Text text="and increasing your profitability." appearance="body_s_regular" color="white" />
          <Text text="Thank you for considering our software, and we look forward to" appearance="body_s_regular" color="white" />
          <Text text="helping you grow your business." appearance="body_s_regular" color="white" />
          <br/>
          <div className="busifirstcolscan">
            <div>
            <Text text="Scan QR to" appearance="heading_m_medium" color="white" />
            <Text text="download App!" appearance="heading_m_medium" color="white" />
            </div>
            <div className="">
                <Image src="/images/QR.png"/>
            </div>
          </div>
          </Col>


        <Col md={6} className="busisecondcol">
            <Form>
                
            </Form>
        </Col>
        </Row>
        </Container>
    </div>
     </>
    )
};
export default Business;
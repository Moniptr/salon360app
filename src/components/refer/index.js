import { Col, FloatingLabel, Form, Image, Row } from "react-bootstrap";
import ButtonComponent from "../buttonC";
import "./refer.css";
import Text from "../text";

const Refer = () => {
  return (
    <Row className="m-0 mt-5 align-items-center">
      <Col md={6} className="p-0  ">
        <div className="refer-section">
        <Text text="Refer your Salon Business Partners" appearance="heading_m_medium" color="white" />
            <br/>
          <Text text="Whether you are a small independent salon or a large spa chain, our " appearance="body_s_regular" color="white" />
          <Text text="salon management app can help you achieve your business goals by" appearance="body_s_regular" color="white" />
          <Text text="streamlining your operations, improving your customer engagement," appearance="body_s_regular" color="white" />
          <Text text="and increasing your profitability." appearance="body_s_regular" color="white" />
          <Text text="Thank you for considering our software, and we look forward to" appearance="body_s_regular" color="white" />
          <Text text="helping you grow your business." appearance="body_s_regular" color="white" />

          <Row>
            <Col>
              <Text
                text="Scan QR to download App!"
                width="150px"
                appearance="heading_m_medium"
                className="iterested-heading"
              />
            </Col>
            <Col className="text-md-end imageQR">
              <Image src="/QR.png"/>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={6} className="p-0 interested-section">
        <Text
          text="Know anyone who might be interested?"
          width="250px"
          appearance="heading_m_regular"
          className="iterested-heading"
        />
        <Form className="mb-5 mt-4">
          <div class="form-floating mb-2">
            <input
              type="name"
              class="form-control input-filed"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="floatingInputlabel">
              Enter name
            </label>
          </div>
          <div class="form-floating">
            <input
              type="number"
              class="form-control input-filed"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="floatingInputlabel">Mobile</label>
          </div>
        </Form>
        <ButtonComponent label="Submit" size="medium" />
      </Col>
    </Row>
  );
};
export default Refer;

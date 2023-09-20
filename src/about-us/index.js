import Textheading from "../Textheading";
import Descriptiontext from "../description";
/**@jsxImportSource @emotion/react */
import { Col, Container, Row } from "react-bootstrap";

const Aboutus=()=>{
    return(
        <>
            <Container>
            <Row>
            <Col md={3} sm={12}>
            <Textheading Text="About-Us"/>
            </Col>
            <Col md={9} sm={12}>
            <Descriptiontext para="Our ParlorWorks App is designed specifically for hair, nail, and beauty salons, spas, and health and wellness centers. It is a cloud-based software that specializes in customer engagement and retention, allowing businesses to manage important aspects including appointment scheduling, client data management, inventory management, payment processing, and client marketing."/>
            <Descriptiontext para="We believe in delivering exceptional value to our customers, which is why we offer a range of features and functionalities that are tailored to the unique needs of the salon industry. Our software is intuitive and user-friendly, making it easy for salon owners and their staff to use and manage their day-to-day operations."/>
            </Col>
        </Row>
        </Container>
        </>
    )
};
export default Aboutus;
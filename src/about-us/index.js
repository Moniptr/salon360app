
/**@jsxImportSource @emotion/react */
import { Col, Row } from "react-bootstrap";
import Text from "../components/text/index";
import Container from "../components/container/index";
import styles from "../about-us/about.module.css"

const Aboutus=({items})=>{
    return(
        <>
            <Container background="rgba(36, 40, 52, 1)" inline={true}>
            <Row className={styles.aboutsectionmain}>
            <Col md={4} className={styles.abouttext}>
            <Text className={styles.abouttext} text="AboutUs" appearance="heading_l_medium" color="white" />
            <Text className={styles.abouttext} text="Us" appearance="heading_l_medium" color="white"/>
            </Col>
            <Col  md={8} className={styles.aboutdescription}>
            <Text text="Our ParlorWorks App is designed specifically for hair, nail, and beauty salons, spas, and health and wellness centers. It is a cloud-based software that specializes in customer engagement and retention, allowing businesses to manage important aspects including appointment scheduling, client data management, inventory management, payment processing, and client marketing.
            ." appearance="body_s_regular" color="white"/>

            <Text text="We believe in delivering exceptional value to our customers, which is why we offer a range of features and functionalities that are tailored to the unique needs of the salon industry. Our software is intuitive and user-friendly, making it easy for salon owners and their staff to use and manage their day-to-day operations." appearance="body_s_regular" color="white"/>
            </Col>
        </Row>
        </Container>
        </>
    )
};
export default Aboutus;
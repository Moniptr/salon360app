import {css} from "@emotion/react";
/**@jsxImportSource @emotion/react */
import styles from "../monthlyinvestment/monthlyinvest.module.css";
import Container from "../components/container";
import { Col, Image, Row } from "react-bootstrap";
import Text from "../components/text";
import Button from "../components/Button";

const Monthly=()=>{
    return(
        <>
        <Container>
            <Row className={styles.monthlymain}>
                <Col xxs={true} className={styles.monthlytextcol}>
                <Text className={styles.monthlytext} text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                <br/>
                <Text text="Track your monthly expenses, including utilities, salaries, and" appearance="body_s_regular" color="white" />
                <Text text="supplies. Stay on top of finances and make informed decisions" appearance="body_s_regular" color="white" />
                <Text className={styles.textgap} text="about budgeting and cost-cutting." appearance="body_s_regular" color="white"/>
                <br/>
                <Text className={styles.monthlysecondtext}  text="Track product inventory, including the quantity, cost, and sales of" appearance="body_s_regular" color="white" />
                <Text className={styles.monthlythreetext} text="each product & optimize your inventory levels and ensure that" appearance="body_s_regular" color="white" />
                <Text text="they you enough products to meet customer demand." appearance="body_s_regular" color="white" />
                <br/>
                <Button className={styles.monthlybutton} label="Know More"/>
                </Col>
                <Col xxs={true} className={styles.monthlyimage}>
                    <Image src="/images/rectangleimage.png" width="499px" height="287px"/>
                </Col>
            </Row>
        </Container>

        <Container className={styles.secondcontainer}>
            <Row className={styles.secondcontainerrow}>
                <Col xxs={true} className={styles.secondcontimage} >
                    <Image src="/images/rectangleimage.png" width="499px" height="287px"/>
                </Col>
                <Col xxs={true} className={styles.seconddescription} >
                <Text className={styles.secondmontext}  text="Monthly Expenses & Inventory" appearance="heading_m_medium" color="white" />
                <br/>
                <Text   text="Manage your employee information, including their salaries," appearance="body_s_regular" color="white" />
                <Text text="commissions, and employment status. Also track commissions" appearance="body_s_regular" color="white" gap="20px" />
                <Text text="earned by each employee on each product or service they sell." appearance="body_s_regular" color="white" />
                <Text text="This helps you to determine how much to pay each employee" appearance="body_s_regular" color="white" />
                <Text text="based on their sales performance." appearance="body_s_regular" color="white" />
                <br/>
                <Button  label="Know More"/>
                </Col>
            </Row>
        </Container>
        </>
    )
};
export default Monthly;
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
// import Text from "../components/text";
import "../bannerSection/bannersec.css";
import Text from "../text";
import { Icon } from "../icon/icon";
import IcParlour from "../../design-system/icons/IcParlour";
import IcBannersmicon from "../../design-system/icons/IcBannersmicon";

const BannerSection = () =>{
    return(
        <>
            {/* <Container className="bannerfirstcontainer">
                <Container className="bannersecondcontainer"> */}
                <Row className=" m-0 bannermainrow">
                    <Col md={4}>
                       <Image fluid src="/images/Group 28785.png"/>
                   </Col>
                    <Col md={7} className="d-flex listcolumn">
                    <ul>
                    <ListGroup.Item className="listgroup">
                    <div className="d-flex ">
                    <Icon className="listicon" ic={<IcBannersmicon />}/>
                    <Text
                        text="dcfs,zns,vfsfv asdfv,mdfv"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                     </div>
                     <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="dmvgksdmgskdgsdmgs"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                       <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="x zcmzc zvczxv"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      
                      </div>
                      <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text=",ncsfhdgw"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                </ListGroup.Item>
                </ul>

                <ul>
                    <ListGroup.Item className="listgroup ">
                    <div className="d-flex ">
                    <Icon className="listicon" ic={<IcBannersmicon />}/>
                    <Text
                        text="s cm,sf d.smvsdvg"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                     </div>
                     <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="ndcn dnvdvmvdsv"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                       <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="s c sacsamcsa/cma/scasc.as"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      
                      </div>
                      <div className="d-flex">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="sfhclasfalsfasv"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                </ListGroup.Item>
                </ul>
                    </Col>
                </Row>
                {/* </Container>
                </Container> */}
    </>
        )
    };
export default BannerSection;
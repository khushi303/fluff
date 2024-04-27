import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import videotutorail from '../../public/assets/images/webp/videotutorial.webp'
import { GreenStar } from "./common/Icon";

export default function Trusted() {
    return (
        <div className="position-relative">
            <Container className="custom_container pt_xl_144 pt-5 mt-xl-0 mt-lg-4 mt-3 position-relative z-2">
                <h2 data-aos="fade-right" className="text_xl fw-normal ff_bakbak leading_130 text-center header_shadow mb-0">Why We're Trusted</h2>
                <Row className="pt_lg_50 pt-md-5 pt-4 mt-md-0 mt-3 flex-lg-row flex-column-reverse">
                    <Col lg={6} className="col-12 pe-xl-0 pe-lg-4 mt-lg-0 mt-md-5 mt-4 pt-md-0 pt-2">
                        <div data-aos="fade-right">
                            <div className="trusted_box transition_linear ">
                                <p className="text_md fw-normal ff_bakbak leading_140 text-black mb-3 transition_linear">Communicate efficiently with the
                                    team</p>
                                <p className="text_sm fw-normal leading_150 text_lightgray100 mb-0 transition_linear mb-0">Jonathan and his team became and integral part of the CX team and were up and running
                                    smoothly and immediately. Completely understood the needs of new but quickly growing DTC
                                    brand and how to help.</p>
                            </div>
                        </div>
                        <div data-aos="fade-right">
                            <div className="trusted_box transition_linear mt-sm-4 mt-3">
                                <p className="text_md fw-normal ff_bakbak leading_140 text-black mb-3 transition_linear">CX team and were up and running
                                    smoothly</p>
                                <p className="text_sm fw-normal leading_150 text_lightgray100 mb-0 transition_linear mb-0">Jonathan and his team became and integral part of the CX team and were up and running
                                    smoothly and immediately. Completely understood the needs of new but quickly growing DTC
                                    brand and how to help.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="col-12 d-flex align-items-center justify-content-lg-end justify-content-center ps-xl-0 ps-lg-4 accordion">
                        <Image data-aos="zoom-in" src={videotutorail} alt="videotutorail" className="videoimg w-100 h-100" />
                    </Col>
                </Row>
            </Container>
            <div className="position-absolute trustedstar z-1">
                <GreenStar />
            </div>
        </div>
    )
}
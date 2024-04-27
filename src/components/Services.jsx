import { Col, Container, Row } from "react-bootstrap";
import { Beauty, BlueStar, Food, Health, Pet } from "./common/Icon";
import Image from "next/image";
import serviceimg from '../../public/assets/images/webp/serviceimg.webp'
import Ellipseimg from '../../public/assets/images/webp/serviceelipse.webp'

export default function Services() {
    return (
        <div className="position-relative">
            <Container className="custom_container pt_xl_130 pt-5 mt-xl-0 mt-lg-4 mt-3">
                <Row className="justify-content-between align-items-center">
                    <Col lg={6} className="mw_470 d-flex align-items-lg-start justify-content-lg-start align-items-center flex-column">
                        <h2 data-aos="fade-right" className="mb-0 ff_bakbak text_lg fw-normal text_black100 text-lg-start text-center">Industries We Service</h2>
                        <p data-aos="fade-right" className="mt_20 text_sm leading_150 fw-normal text_lightgray100 mb-lg-5 mb-4 text-lg-start text-center">With years of experience in the industry, we bring unparalleled expertise to
                            the table. Our team comprises seasoned professionals who understand the intricacies
                            of customer behavior.</p>
                        <div data-aos="fade-right" className="d-flex gap_97 gap-sm-5 gap-4 ">
                            <div className="d-flex gap-sm-3 gap-1 align-items-center service_point">
                                <div className="svgcircle transition_linear d-flex align-items-center justify-content-center">
                                    <Food />
                                </div>
                                <p className="text_md fw-normal leading_140 ff_bakbak mb-0">Food/Bev</p>
                            </div>
                            <div className="d-flex gap-sm-3 gap-1 align-items-center service_point">
                                <div className="svgcircle transition_linear d-flex align-items-center justify-content-center">
                                    <Health />
                                </div>
                                <p className="text_md fw-normal leading_140 ff_bakbak mb-0">Health</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="d-flex gap_97 gap-sm-5 gap-4 mt-lg-5 mt-4">
                            <div className="d-flex gap-sm-3 gap-1 align-items-center service_point">
                                <div className="svgcircle transition_linear d-flex align-items-center justify-content-center">
                                    <Beauty />
                                </div>
                                <p className="text_md fw-normal leading_140 ff_bakbak mb-0">Beauty</p>
                            </div>
                            <div className="d-flex gap-sm-3 gap-1 align-items-center service_point">
                                <div className="svgcircle transition_linear d-flex align-items-center justify-content-center">
                                    <Pet />
                                </div>
                                <p className="text_md fw-normal leading_140 ff_bakbak mb-0">Pet</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="col-12 d-flex align-items-center justify-content-lg-end justify-content-center mt-lg-0 mt-md-5 mt-4 pt-md-0 pt-2">
                        <Image data-aos="zoom-in" src={serviceimg} alt="serviceimg" className="w-100 mh_456 h-100 mw_447" />
                    </Col>
                </Row>
            </Container>
            <div className="position-absolute servicestar d-xl-block d-none">
                <BlueStar />
            </div>
            <div className="ellipseimg position-absolute end-0 d-xl-block d-none">
                <Image src={Ellipseimg} alt="Ellipseimg" className="w-100 h-100" />
            </div>
        </div>
    )
}
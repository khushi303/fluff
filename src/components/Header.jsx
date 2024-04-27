import { Col, Container, Row } from "react-bootstrap";
import { BlueStar, GreenStar, Star } from "./common/Icon";
import btndoll from '../../public/assets/images/webp/btndoll.webp'
import Image from "next/image";
import Link from "next/link";
import headerimg from '../../public/assets/images/webp/headerimg.webp'

export default function Header() {
    return (
        <>
            <div id="home" className="pt_xl_130 pt-5 mt-xl-0 mt-lg-4 mt-3 position-relative">
                <Container className="custom_container position-relative">
                    <Row className="align-items-center justify-content-center">
                        <Col lg={6} className="col-12 d-flex align-items-lg-start align-items-center justify-content-lg-start  justify-content-center flex-column">
                            <div className="border border-black d-inline-flex gap-3 align-items-center rounded-5 px_12" data-aos="fade-right">
                                <Star />
                                <p className="ff_bakbak text_sm fw-normal leading_150 text-black mb-0">Welcome to FLUFF</p>
                                <Star />
                            </div>
                            <h2 className="leading_120 text_xxl ff_bakbak fw-normal header_shadow mt_20 text-lg-start text-center" data-aos="fade-right">We help turn your customers into superfans</h2>
                            <p data-aos="fade-right" className="text_sm fw-normal mw_400 mt_20 mb-3 leading_150 text-lg-start text-center">CX so good, it'll make your mom proud and your competition nervous!</p>
                            <div data-aos="fade-right" className="pt-2 d-inline-flex">
                                <Link href={'/getstarted'} className="rounded-2 start_btn transition_linear bg_darkgreen flex-row d-flex gap_10 align-items-center"><p className="text_sm fw-normal leading_150 mb-0 text-white">Get Started</p>
                                    <Image id="getstarted" src={btndoll} alt="btndoll" width={24} height={28} />
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} className="col-12 d-flex align-items-center justify-content-center mt-lg-0 mt-5">
                            <Image data-aos="zoom-in" src={headerimg} alt="headerimg" className="w-100 mw_566 h_448 h-100" />
                        </Col>
                    </Row>
                    <div className="position-absolute header_bluestar">
                        <BlueStar />
                    </div>
                </Container>
                <div className="position-absolute left_headerstar d-xl-block d-none">
                    <GreenStar />
                </div>
                <div className="position-absolute right_headerstar">
                    <GreenStar />
                </div>
            </div>
        </>
    )
}
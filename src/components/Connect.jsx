import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import connectimg from '../../public/assets/images/webp/connectimg.webp'
import { BlueStar, GreenStar } from "./common/Icon";

export default function Connect() {
    return (
        <div className="position-relative">
            <Container className="custom_container mt_xl_118 pt-5 mt-xl-0 mt-lg-4 mt-3">
                <h2 data-aos="fade-right" className="text_xl fw-normal ff_bakbak leading_130 text-center header_shadow mb-0">Get Connect With Us</h2>
                <div className="pt_lg_50 pt-md-5 pt-4 mt-md-0 mt-2 d-flex justify-content-between align-items-center flex-lg-row flex-column gap-5">
                    <div className="connectimg">
                        <Image data-aos="zoom-in" src={connectimg} alt="connectimg" className="w-100 h-100" />
                    </div>
                    <form className="w-100 form_box">
                        <div data-aos="flip-up" className="w-100 d-flex gap_lg_18 gap-3">
                            <input type="text" placeholder="Your name" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                            <input type="text" placeholder="Email Address" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                        </div>
                        <div data-aos="flip-up" className="w-100 d-flex gap_lg_18 gap-3 mt_sm_18 mt-3">
                            <input type="text" placeholder="Company Size" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                            <input type="text" placeholder="Company Name" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                        </div>
                        <div data-aos="flip-up" className="w-100">
                            <input type="text" placeholder="Website URL" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2 mt_sm_18 mt-3" required />
                        </div>
                        <div data-aos="flip-up" className="w-100 d-flex gap_lg_18 gap-3 mt_sm_18 mt-3">
                            <input type="text" placeholder="Budget" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                            <input type="text" placeholder="Industry" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2" required />
                        </div>
                        <div data-aos="flip-up" className="w-100">
                            <textarea name="message" id="message" placeholder="Message" cols="30" rows="10" className="input_box text_sm fw-normal leading_150 text_lightgray100 w-100 transition_linear rounded-2 textarea_box" required></textarea>
                        </div>
                        <div data-aos="flip-up" className="w-100">
                            <input type="Submit" value="Submit" className="rounded-2 text_sm fw-normal leading_150 bg_darkgreen text-white com_btn transition_linear mt-4" />
                        </div>
                    </form>
                </div>
            </Container>
            <div className="position-absolute connect_greenstar">
                <GreenStar />
            </div>
            <div className="position-absolute connect_bluestar d-xxl-block d-none">
                <BlueStar />
            </div>
        </div>
    )
}
import Image from "next/image";
import { Container } from "react-bootstrap";
import needimg from '../../public/assets/images/webp/needimg.webp'
import { RoadmapData } from "./common/MapData";
import CommonBtn from "./common/CommonBtn";
import { GreenStar } from "./common/Icon";
import needellipse from '../../public/assets/images/webp/needellipses.webp'

export default function NeedUs() {
    return (
        <div className="position-relative">
            <Container id="pricing" className="custom_container pt_xl_120 pt-5 mt-xl-0 mt-lg-4 mt-3">
                <h2 data-aos="fade-right" className="text_xl fw-normal ff_bakbak leading_130 text-center header_shadow mb-0">Why You Need Us</h2>
                <div className="pt_lg_50 pt-4 d-flex align-items-center justify-content-between flex-lg-row flex-column mw_1140">
                    <div className="needimg">
                        <Image data-aos="zoom-in" src={needimg} alt="needimg" className="w-100 needimg h-100" />
                    </div>
                    <div className="position-relative roadmapbox w-100 ps-xl-0 ps-lg-5 mt-lg-0 mt-md-5 mt-4 pt-md-0 pt-2">
                        {RoadmapData.map((data, id) => {
                            return (
                                <div key={id} className="d-flex justify-content-between gap-lg-0 gap-4 w-100 road_hover transition_linear">
                                    <div data-aos="zoom-in" className="position-relative z-3">
                                        <div className="needcircle transition_linear d-flex align-items-center justify-content-center">
                                            <p className="text_lg transition_linear fw-normal leading_130 text-black ff_bakbak text-center mb-0">{data.id}</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-right" className="roadmap_content mb-3">
                                        <h3 className="leading_140 text_md fw-normal ff_bakbak text-black">{data.heading}</h3>
                                        <p className="text_sm fw-normal text_lightgray100 leading_150 mb-0">{data.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="position-absolute top-0 bottom-0 h-75 road_line bg_blue100"></div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="pt_lg_34 pt-md-4 pt-3 d-flex align-items-center justify-content-center">
                    <CommonBtn btnname='Learn more' />
                </div>
            </Container>
            <div className="position-absolute needstar d-lg-block d-none">
                <GreenStar />
            </div>
            <div className="position-absolute needellipse start-0 d-xl-block d-none">
                <Image src={needellipse} alt="needellipse" className="w-100 h-100" />
            </div>
        </div>
    )
}
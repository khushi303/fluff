import Image from "next/image";
import { Container } from "react-bootstrap";
import fluff from '../../public/assets/images/webp/fluffimg.webp'
import { FaceBook, InstaGram, Tweeter } from "./common/Icon";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Container className="custom_container mt_xl_156 pt-5 mt-xl-0 mt-lg-4 mt-3">
                <div className=" d-flex align-items-center justify-content-center">
                    <Image src={fluff} alt="fluff" className="w-100 h-100 fluffimg mx-auto" />
                </div>
            </Container>
            <div className="pt_xl_82 pt-md-5 pt-4 bg_darkgreen">
                <Container className="custom_container pb_15">
                    <div className="d-flex justify-content-md-between justify-content-center gap-2 align-items-center flex-md-row flex-column">
                        <p className="text_sm fw-normal leading_150 text_lightgray200 mb-0">Copyright © {new Date().getFullYear()} FLUFF  All Rights reserved</p>
                        <div className="d-flex align-items-center gap_14">
                            <Link href={'https://www.facebook.com/'} className="link_circle bg-white d-flex align-items-center justify-content-center transition_linear">
                                <FaceBook />
                            </Link>
                            <Link href={'https://www.instagram.com/'} className="link_circle bg-white d-flex align-items-center justify-content-center transition_linear">
                                <InstaGram />
                            </Link>
                            <Link href={'https://twitter.com/i/flow/login'} className="link_circle bg-white d-flex align-items-center justify-content-center transition_linear">
                                <Tweeter />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
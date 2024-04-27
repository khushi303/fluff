"use client"
import Link from "next/link";
import { Logo } from "./common/Icon";
import CommonBtn from "./common/CommonBtn";
import { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'

export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    const [_document, set_document] = useState(null)
    useEffect(() => {
        set_document(document)
        if (isOpen === true) {
            document.body.classList.add('overflow_hidden');
        } else {
            document.body.classList.remove('overflow_hidden');
        }
    });
    return (
        <>
            <div className="container mw_1207">
                <nav className="nav_box rounded_12 mt-4 d-flex align-items-center justify-content-between">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <div className={`d-flex align-items-center nav_tabs ${isOpen ? "left_0" : ""}`}>
                        <Link href='#home' className="text_sm leading_150 text_lightgray100 fw-normal link_hover transition_linear">Home</Link>
                        <Link href='#about' className="text_sm leading_150 text_lightgray100 fw-normal link_hover transition_linear">About </Link>
                        <Link href='#pricing' className="text_sm leading_150 text_lightgray100 fw-normal link_hover transition_linear">Pricing</Link>
                        <div className="d-lg-none d-flex">
                            <CommonBtn btnname='Contact us' />
                        </div>
                    </div>
                    <div className="d-lg-none d-block position-relative z_10">
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded hideOutline={false} />
                    </div>
                    <div className="d-lg-block d-none">
                        <CommonBtn btnname='Contact us' />
                    </div>
                </nav>
            </div>
        </>
    )
}
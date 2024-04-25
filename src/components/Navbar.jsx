import Link from "next/link";
import { Logo } from "./common/Icon";

export default function NavBar() {
    return (
        <>
            <div className="custom_container container">
                <nav className="nav_box rounded_12 mt-4">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
                    <div>
                        <Link href={'#home'} className="text_sm">Home</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
import styled from "@emotion/styled";
import Link from "next/link";


const NavBar = () => {
  return (
        <nav className="flex justify-around">
            <div className="flex-initial">
                <Link href="/">
                    <a>National Higher Secondary School</a>
                </Link>
            </div>
            <div className="md:order-last">
                <ul className="flex justify-around">
                    <li className="mr-6">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/">
                            <a>Gallery</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/">
                            <a>Alumni</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
};

export default NavBar;

import styled from "@emotion/styled";
import Link from "next/link";

const StyledNavBar = styled.nav`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-bottom: 2px solid #2196f3;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
        <nav className="flex justify-around">
            <div className="flex-initial">
                <Link href="/">
                    National Higher Secondary School
                </Link>
            </div>
            <div className="md:order-last">
                <ul className="flex gap-8 justify-around">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Alumni
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                           Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </StyledNavBar>
  );
};

export default NavBar;

import Link from "next/link";
import styled from "styled-components";

export const navStyle = styled('div')`
  background: #63d471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const Nav = () => {
  return (
    <navStyle>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </navStyle>
  );
};

export default Nav;

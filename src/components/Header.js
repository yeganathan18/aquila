import styled from "@emotion/styled";

const HeaderStyle = styled.div`
  font-size: 0.85rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="flex justify-between">
        <h3 className="flex-initial">IRUNJALAKUDA - 680121</h3>
        <div className="md:order-last">
          <ul className="flex justify-center">
            <li className="mr-6">
              <a href="#">EXAM RESULTS</a>
            </li>
            <li className="mr-6">
              <p>HS: 0480 - 2822086</p>
            </li>
            <li className="mr-6">
              <p>HSS: 0480 - 2821248</p>
            </li>
            <li className="mr-6">
              EMAIL: <a href="contact@nationalhss.com">contact@nationalhss.com</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;

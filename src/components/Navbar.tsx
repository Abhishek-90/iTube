import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Content>
        <CustomLink to="/">
          <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" />
          <span>iTube</span>
        </CustomLink>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  /* background-color: beige; */
  width: 100%;
  padding: 14px;
  display: flex;
  align-items: center;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  background-color: transparent;
  & > img {
    height: 45px;
    margin-right: 10px;
  }
`;

export default Navbar;

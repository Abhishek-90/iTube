import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../constants/theme";
// import Logo from "";

function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const Navigate = useNavigate();

  const onSearchButtonClick = () => {
    if (searchKeyword) {
      Navigate(`/result?query=${searchKeyword}`);
    }
  };

  return (
    <Container>
      <Content>
        <CustomLink to="/">
          <img src={require("../assets/logo.png")} alt="logo" />
          <span>iTube</span>
        </CustomLink>
        <SearchBoxWrapper>
          <Input
            placeholder="Enter Search"
            value={searchKeyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchKeyword(e.target.value)
            }
          />
          <SearchButton onClick={onSearchButtonClick}>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchButton>
        </SearchBoxWrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${S.black};
`;

const Content = styled.div`
  /* background-color: beige; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  background: transparent;
  padding: 10px 14px;

  & > img {
    height: 45px;
    margin-right: 10px;
    background: transparent;
  }

  & > span {
    background: transparent;
    font-weight: 700;
  }
`;

const SearchBoxWrapper = styled.div`
  padding: 10px 14px;
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px;
  font-size: 14px;
  line-height: 1.33;
  border-radius: 50px;
  outline: none;
  border: 1px solid ${S.black};
`;

const SearchButton = styled.button`
  width: 40px;
  position: absolute;
  right: 14px;
  padding: 12px;
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${S.black};

  & > img {
    pointer-events: none;
    height: 20px;
    & > svg {
      color: white;
    }
  }
`;

export default Navbar;

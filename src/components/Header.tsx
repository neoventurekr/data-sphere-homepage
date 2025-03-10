import styled from '@emotion/styled';
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
    z-index: 10;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 70px;
`

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <h1><img src={'/images/logo-white.png'} alt={'data sphere logo'} /></h1>
      </Link>
      
      <Nav>
        <div></div>
      </Nav>
    </Wrapper>
  );
};

export default Header;
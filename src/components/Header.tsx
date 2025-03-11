import { useEffect, useState } from "react";
import styled from '@emotion/styled';
import { LinkWithLocale } from 'next-export-i18n';
import { useCustomTranslation } from "@/hook/useCustomTranslation";
import LanguageSwitcherDropdown from "@/components/LanguageSwitcherDropdown";

const Wrapper = styled.header<{isFixed: boolean}>`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 100;
    background: rgba(13, 2, 54, 0);
    transition: 0.2s;
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1280px;
        margin: 0 auto;
        padding: 23px 0;
    }
    
    ${({ isFixed }) => isFixed &&`
      position: fixed;
      background: rgba(13, 2, 54, 1);
    `}
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 70px;
    color: var(--white, #FFF);
    font-size: 22px;
    
    div {
        cursor: pointer;
    }
`

interface Props {
  onNavigate: {
    home: () => void;
    about: () => void;
    problem: () => void;
    features: () => void;
  };
}

const Header = ({ onNavigate }: Props) => {
  const { t } = useCustomTranslation();
  
  const [isFixed, setIsFixed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > window.innerHeight * 0.8);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Wrapper isFixed={isFixed}>
      <div className={'container'}>
        <LinkWithLocale href="/" passHref>
          <h1><img src={'/images/logo-white.png'} alt={'data sphere logo'} /></h1>
        </LinkWithLocale>
        
        <Nav>
          <div onClick={onNavigate.home}>{t('common.menu_home')}</div>
          <div onClick={onNavigate.about}>{t('common.menu_about')}</div>
          <div onClick={onNavigate.problem}>{t('common.menu_problem&solution')}</div>
          <div onClick={onNavigate.features}>{t('common.menu_features')}</div>
          <LanguageSwitcherDropdown />
      </Nav>
      </div>
    </Wrapper>
  );
};

export default Header;
import styled from '@emotion/styled';
import {LinkWithLocale} from 'next-export-i18n';
import {useCustomTranslation} from "@/hook/useCustomTranslation";


const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    padding: 23px 0;
    z-index: 10;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 70px;
    color: var(--white, #FFF);
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.242px;
`

const Header = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <LinkWithLocale href="/" passHref>
        <h1><img src={'/images/logo-white.png'} alt={'data sphere logo'} /></h1>
      </LinkWithLocale>
      
      <Nav>
        <div>{t('common.menu_home')}</div>
        <div>{t('common.menu_about')}</div>
        <div>{t('common.menu_problem&solution')}</div>
        <div>{t('common.menu_features')}</div>
        <div>{t('common.menu_button')}</div>
      </Nav>
    </Wrapper>
  );
};

export default Header;
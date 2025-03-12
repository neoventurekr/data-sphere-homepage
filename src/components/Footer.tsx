import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 120px 0;
    background: var(--white, #FFF);
    
    .logo {
        width: 286px;
    }
    
    .link-container {
        display: flex;
        align-items: flex-start;
        gap: 50px;
    }
    
    .link-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        
        p {
            color: #787878;
            font-size: 24px;
        }
        
        button {
            color: #9F9F9F;
            font-size: 20px;
            font-weight: 400;
        }
    }
`

const Footer = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div>
        <img src={'images/logo-black.png'} alt="logo" className="logo" />
      </div>
      <div className={'link-container'}>
        <div className={'link-group'}>
          <p>{t('footer.security')}</p>
          <button>{t('footer.security_privacy')}</button>
          <button>{t('footer.security_policy')}</button>
          <button>{t('footer.security_termOfUse')}</button>
          <button>{t('footer.security_legalNotice')}</button>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.explore')}</p>
          <button>{t('footer.explore_docs')}</button>
          <button>{t('footer.explore_medium')}</button>
          <button>{t('footer.explore_github')}</button>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.community')}</p>
          <button>{t('footer.community_twitter')}</button>
          <button>{t('footer.community_telegram')}</button>
          <button>{t('footer.community_youtube')}</button>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.contactUs')}</p>
          <button>{t('footer.contactUs_support')}</button>
          <button>{t('footer.contactUs_email')}</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
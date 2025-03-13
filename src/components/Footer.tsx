import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 120px 0 52px;
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
        gap: 14px;
        
        p {
            color: #787878;
            font-size: 24px;
        }
        
        a {
            color: #9F9F9F;
            font-size: 20px;
            font-weight: 400;
        }
    }
    
    .copyright {
        width: 100%;
        margin-top: 80px;
        flex-shrink: 0;
        color: #CACACA;
        font-size: 18px;
        text-align: center;
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
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.security_privacy')}</a>
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.security_policy')}</a>
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.security_termOfUse')}</a>
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.security_legalNotice')}</a>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.explore')}</p>
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'} aria-disabled={true}>{t('footer.explore_docs')}</a>
          <a href={'https://medium.com/@DataSphere_Official'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.explore_medium')}</a>
          <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.explore_github')}</a>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.community')}</p>
          <a href={'https://x.com/DataSphere_data'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.community_twitter')}</a>
          <a href={'https://t.me/datasphere_global'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.community_telegram')}</a>
          <a href={'https://www.youtube.com/@DataSphere-data'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.community_youtube')}</a>
        </div>
        
        <div className={'link-group'}>
          <p>{t('footer.contactUs')}</p>
          <a href={'mailto:support@deepdatasphere.com'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.contactUs_support')}</a>
          <a href={'mailto:support@deepdatasphere.com'} target={'_blank'} rel={'noopener noreferrer'}>{t('footer.contactUs_email')}</a>
        </div>
      </div>
      
      <div className={'copyright'}>Copyright© Data Sphere. All rights reserved.</div>
    </Wrapper>
  );
};

export default Footer;
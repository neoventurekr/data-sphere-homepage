import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F1EDFE;
    height: 100vh;
    
    
    .content {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 1290px;
        margin: 0 auto;
        color: #414141;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.22px;
    }
    
    h2 {
        color: var(--black, #222);
        font-size: 54px;
        font-weight: 700;
        letter-spacing: -0.594px;
        margin-bottom: 28px;
    }
    
    .accent_text {
        color: var(--main, #8C44FF);
    }
`

const About = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div className={'content'}>
        <div>
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
        </div>
        <img src={'/images/image_about.png'} alt="about" />
      </div>
    </Wrapper>
  );
};

export default About;
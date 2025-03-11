import {forwardRef} from "react";
import styled from '@emotion/styled';
import Title from "@/components/text/Title";
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.section`
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
    }
    
    h2 {
        text-align: left;
        margin-bottom: 28px;
    }
    
    .accent_text {
        color: var(--main, #8C44FF);
    }
`

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper ref={ref}>
      <div className={'content'}>
        <div>
          <Title>
            {t('about.title')}
          </Title>
          <p>{t('about.description')}</p>
        </div>
        <img src={'/images/image_about.png'} alt="about" />
      </div>
    </Wrapper>
  );
});

About.displayName = 'About';

export default About;
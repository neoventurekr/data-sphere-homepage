import {forwardRef} from "react";
import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background: url('/images/background_home.png') center no-repeat;
    background-size: cover;
    height: 100vh;
    padding: calc((100% - 1280px) / 2);
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 558px;
    }
    
    h2 {
        font-size: 60px;
        font-weight: 700;
        letter-spacing: -0.6px;
        background: linear-gradient(90deg, #7DDCFF 0.01%, #8E48FF 102.25%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    p {
        margin: 14px 0 30px;
        color: #EEE;
        font-size: 24px;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 22px;
        border-radius: 40px;
        border: 1px solid var(--main, #8C44FF);
        background: var(--main, #8C44FF);
        color: var(--white, #FFF);
        font-size: 20px;
    }
`

const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper ref={ref}>
      <div className={'content'}>
        <h2>{t('home.title')}</h2>
        <p>{t('home.subtitle')}</p>
        <button type={'button'}>{t('home.button')}</button>
      </div>
    </Wrapper>
  );
});

Home.displayName = 'Home';

export default Home;
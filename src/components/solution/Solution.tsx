import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";
import CardSlider from "@/components/solution/CardSlider";

const Wrapper = styled.div`
    .head {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        align-items: center;
        width: 100%;
        padding: 210px;
        background: url('/images/background_solution.png') center center no-repeat;
        background-size: cover;

        h2 {
            color: var(--white, #FFF);
            font-size: 54px;
            font-weight: 700;
            letter-spacing: -0.594px;
        }
        
        p {
            width: 770px;
            color: var(--gray200, #DEDEDE);
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            letter-spacing: -0.264px;
        }

        .accent_text {
            color: var(--main, #8C44FF);
        }
    }
`

const Features = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding: 243px 0 369px;
    
    h3 {
        color: var(--black, #222);
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -0.55px;
    }
`

const Solution = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div className={'head'}>
        <h2>{t('solution.title')}</h2>
        <p>{t('solution.subtitle')}</p>
      </div>
      <Features>
        <h3>{t('solution.card_title')}</h3>
        <CardSlider />
      </Features>
    </Wrapper>
  );
};

export default Solution;
import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";
import CardSlider from "@/components/solution/CardSlider";
import Title from "@/components/text/Title";

const Wrapper = styled.section`
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
        color: var(--white, #FFF);
        
        p {
            width: 770px;
            color: var(--gray200, #DEDEDE);
            text-align: center;
            font-size: 24px;
        }
    }
    
    .card-title {
        text-align: left;
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
        letter-spacing: -0.6px;
    }
`

const Solution = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div className={'head'}>
        <Title>
          {t('solution.title')}
        </Title>
        <p>{t('solution.subtitle')}</p>
      </div>
      <Features>
        <Title className="card-title">
          {t('solution.card_title')}
        </Title>
        <CardSlider />
      </Features>
    </Wrapper>
  );
};

export default Solution;
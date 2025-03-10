import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";
import SolutionFeatures from "@/components/solution/SolutionFeatures";

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

const Solution = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div className={'head'}>
        <h2>{t('solution.title')}</h2>
        <p>{t('solution.subtitle')}</p>
      </div>
      <SolutionFeatures />
    </Wrapper>
  );
};

export default Solution;
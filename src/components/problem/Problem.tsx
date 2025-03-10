import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";
import CardList from "@/components/problem/CardList";

const Wrapper = styled.div`
  .head {
      position: relative;
      width: 100%;
      aspect-ratio: 1920 / 577;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 14px;
      background: url('/images/background_problem.png') center center no-repeat;
      background-size: cover;
      
      h2 {
          color: var(--black, #222);
          text-align: center;
          font-size: 54px;
          font-weight: 700;
          letter-spacing: -0.594px;
      }
      
      p {
          color: var(--gray800, #5E5E5E);
          text-align: center;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.242px;
      }
  }
`

const Problem = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <div className={'head'}>
        <h2>{t('problem.title')}</h2>
        <p>{t('problem.subtitle')}</p>
      </div>
      
      <CardList />
    </Wrapper>
  );
};

export default Problem;
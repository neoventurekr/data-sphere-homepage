import {forwardRef} from "react";
import styled from '@emotion/styled';
import CardList from "@/components/problem/CardList";
import Title from "@/components/text/Title";
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.section`
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
      
      p {
          color: #5E5E5E;
          text-align: center;
          font-size: 22px;
      }
  }
`

const Problem = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper ref={ref}>
      <div className={'head'}>
        <Title>
          {t('problem.title')}
        </Title>
        <p>{t('problem.subtitle')}</p>
      </div>
      
      <CardList />
    </Wrapper>
  );
});

Problem.displayName = 'Problem';

export default Problem;
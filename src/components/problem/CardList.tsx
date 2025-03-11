import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px 30px;
    padding-top: 174px;
    padding-bottom: 306px;
`

const Card = styled.div<{index: number}>`
    position: relative;
    display: flex;
    width: 410px;
    height: 410px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
    border-radius: 22px;
    border: 1px solid var(--gray300, #CACACA);
    background: var(--gray50, #FAFAFA);
    word-break: keep-all;
    overflow: hidden;
    transition: 0.4s;

    .title {
        color: var(--black, #222);
        text-align: center;
        font-size: 36px;
        font-weight: 600;
    }

    .description {
        color: var(--gray800, #5E5E5E);
        text-align: center;
        font-size: 20px;
    }

    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        background-image: ${({ index }) => `url('images/card-background-${index}.png')`};
        filter: blur(4px);
        opacity: 0;
        transition: 0.4s;
    }
    
    &:hover {
        background-color: rgba(34, 34, 34, 0.60);
        
        .title, .description {
            color: var(--white, #FFF);
        }
        
        .background {
            opacity: 1;
        }
    }
`

const CardList = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      {Array.from({ length: 6 }, (_, index) => (
        <Card key={index} index={index + 1}>
          <p className={'title'}>
            {t(`problem.card_${index + 1}_title`)}
          </p>
          <p className={'description'}>
            {t(`problem.card_${index + 1}_description`)}
          </p>
          <div className={'background'}></div>
        </Card>
      ))}
    </Wrapper>
  );
};

export default CardList;
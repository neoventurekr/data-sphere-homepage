import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1287px;
    gap: 26px 27px;
    margin: 0 auto;
    
    .card {
        flex: 1 0 45%;
        display: flex;
        padding: 54px 50px;
        flex-direction: column;
        gap: 20px;
        border-radius: 23px;
        border: 1px solid #9C15FF;
        background: #160A44;
        
        .title {
            font-size: 36px;
            font-weight: 700;
        }
        
        .description {
            color: var(--gray50, #FAFAFA);
            font-size: 20px;
        }
    }
`

const CardList = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      {Array.from({length: 5}, (_, index) => (
        <div className={'card'} key={index}>
          <p className={'title'}>
            {t(`feature.keyword_${index + 1}`)}
          </p>
          <p className={'description'}>{t(`feature.description_${index + 1}`)}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default CardList;
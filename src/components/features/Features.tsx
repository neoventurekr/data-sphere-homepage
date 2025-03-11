import {forwardRef} from "react";
import styled from '@emotion/styled';
import Title from "@/components/text/Title";
import CardList from "@/components/features/CardList";
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.section`
    padding: 300px 0 400px;
    background-color: #0D0236;
    background-image: url('/images/background_features.png');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 400px;
    color: var(--white, #fff);
    
    .head {
        max-width: 920px;
        margin: 0 auto;

        h2 {
            color: var(--white, #FFF);
        }
        
        p {
            margin-top: 24px;
            text-align: center;
            font-size: 24px;
        }
    }
    
    .content {
        position: relative;
        width: 1316px;
        height: 1210px;
        margin: 130px auto 250px;
        background: url('/images/image-features.png') center bottom no-repeat;
        
        .keyword {
            position: absolute;
            display: flex;
            width: 344px;
            height: 190px;
            justify-content: center;
            align-items: center;
            border-radius: 18px;
            border: 1px solid #9C15FF;
            background: #10004D;
            color: #FFF;
            text-align: center;
            font-size: 30px;
            font-weight: 600;
            
            .icon {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -60%);
                width: 83px;
                height: 83px;
                background: var(--main);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            &:nth-of-type(1) {
                top: 558px;
                left: 0;
            }

            &:nth-of-type(2) {
                top: 40px;
                left: 50%;
                transform: translateX(-50%);
            }

            &:nth-of-type(3) {
                top: 558px;
                right: 0;
            }

            &:nth-of-type(4) {
                top: 280px;
                left: 78px;
            }

            &:nth-of-type(5) {
                top: 280px;
                right: 78px;
            }
        }
    }
`

const Features = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper ref={ref}>
      <div className={'head'}>
        <Title>
          {t('feature.title')}
        </Title>
        <p>{t('feature.subtitle')}</p>
      </div>
      
      <div className={'content'}>
        {Array.from({length: 5}, (_, index) => (
          <div className={'keyword'} key={index}>
            {t(`feature.keyword_${index + 1}`)}
            <div className={'icon'}>
              <img src={`/icons/feature-icon-${index + 1}.svg`} alt={'icon'}/>
            </div>
          </div>
        ))}
      </div>
      
      <CardList />
    </Wrapper>
  );
});

Features.displayName = 'Features';

export default Features;
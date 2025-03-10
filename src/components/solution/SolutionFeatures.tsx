import styled from '@emotion/styled';
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    padding: 243px 0 369px;
`

const SolutionFeatures = () => {
  const { t } = useCustomTranslation();
  
  return (
    <Wrapper>
      <h3>{t('solution.card_title')}</h3>
    </Wrapper>
  );
};

export default SolutionFeatures;
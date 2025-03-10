import styled from '@emotion/styled';
import Header from "@/components/Header";
import { useTranslation } from 'next-i18next'


const Wrapper = styled.div`

`

export default function Home() {
  const { t } = useTranslation('footer')
  
  return (
    <Wrapper>
      <Header />
      <div>{t('common.title')}</div>
    </Wrapper>
  );
}
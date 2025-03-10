import styled from '@emotion/styled';
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Problem from "@/components/problem/Problem";
import Solution from "@/components/solution/Solution";

const Wrapper = styled.div`
    position: relative;
`

export default function Page() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <About />
      <Problem />
      <Solution />
    </Wrapper>
  );
}
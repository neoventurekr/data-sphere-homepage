import { RefObject, useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Problem from "@/components/problem/Problem";
import Solution from "@/components/solution/Solution";
import Features from "@/components/features/Features";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
    position: relative;
`

export default function Page() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  const [isClient, setIsClient] = useState<boolean>(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    isClient && (
      <Wrapper>
      <Header
        onNavigate={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          problem: () => scrollToSection(problemRef),
          features: () => scrollToSection(featuresRef),
        }}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Problem ref={problemRef} />
      <Solution />
      <Features ref={featuresRef} />
      <Footer />
    </Wrapper>
    )
  );
}
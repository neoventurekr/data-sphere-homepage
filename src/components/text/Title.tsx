import styled from '@emotion/styled';
import {HTMLAttributes, ReactNode} from "react";

const Text = styled.h2`
    text-align: center;
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -0.6px;

    .accent_text {
        color: var(--main, #8C44FF);
    }
`

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const Title = ({ children, ...props }: Props) => {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
};

export default Title;
import React from "react";
import styled from "styled-components";

const ChannelBtnWrap = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: #fafafa;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.24s ease;
  cursor: none;
  &:hover,
  &:active {
    background: #e4e4e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
  }
`;

type Props = {
  onMouseOver?: () => void;
  children?: React.ReactChild;
  href?: string;
};

export default function ChannelBtn(props: Props) {
  const { onMouseOver, children, href } = props;

  return (
    <ChannelBtnWrap href={href} onMouseOver={onMouseOver}>
      {children}
    </ChannelBtnWrap>
  );
}

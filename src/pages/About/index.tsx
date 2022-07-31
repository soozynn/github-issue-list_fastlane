import React from "react";
import styled from "styled-components";

const PageName = styled.div`
  position: relative;
  margin: 100px 0 0 20px;
  font-size: 40px;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-red);
`;

export default function About() {
  return (
    <>
      <PageName>About</PageName>
      <Message>nothing...</Message>
    </>
  );
}

import React from "react";
import styled from "styled-components";

interface IssueProps {
  data: {
    number: string;
    title: string;
    created_at: string;
    comments: string;
    user?: UserInterface;
  };
}

interface UserInterface {
  avatar_url: string;
}

const IssueContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px 20vh 0;
  max-height: 450px;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: var(--color-white);
  text-align: center;

  @media (min-width: 1142px) {
    max-width: 900px;
  }

  @media (max-width: 1141px) {
    max-width: 800px;
  }
`;

const Image = styled.img`
  left: 0;
  width: 50%;
  border-radius: 6px;

  @media (min-width: 1142px) {
    max-height: 400px;
    max-width: 400px;
  }

  @media (max-width: 1141px) {
    max-height: 300px;
    max-width: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  * {
    margin: 10px;
    font-weight: bold;
    font-size: var(--size-medium);
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--color-bright-blue);
`;

const CreatedDate = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Comments = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function IssueCard({ data }: IssueProps): React.ReactElement {
  const formatCreatedDate = () => {
    const formatedDate = data.created_at.replace("T", " ").slice(0, -1);
    return formatedDate;
  };

  return (
    <IssueContainer>
      <Image src={data.user?.avatar_url} alt="avatar" />
      <Content>
        <Number>Number: {data.number}</Number>
        <Title>Title: {data.title}</Title>
        <CreatedDate>Created Date: {formatCreatedDate()}</CreatedDate>
        <Comments>Comments: {data.comments}</Comments>
      </Content>
    </IssueContainer>
  );
}
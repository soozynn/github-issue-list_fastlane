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

const IssueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;

  &:hover {
    border: 1px solid var(--color-black);
    cursor: pointer;
  }
`;

export default function IssueBox({ data }: IssueProps): React.ReactElement {
  const formatCreatedDate = () => {
    const formatedDate = data.created_at.replace("T", " ").slice(0, -1);
    return formatedDate;
  };

  return (
    <IssueContainer>
      <li>
        <img src={data.user?.avatar_url} alt="avatar" />
        <div>이슈 번호: {data.number}</div>
        <div>제목: {data.title}</div>
        <div>만든 날짜: {formatCreatedDate()}</div>
        <div>댓글: {data.comments}</div>
      </li>
    </IssueContainer>
  );
}

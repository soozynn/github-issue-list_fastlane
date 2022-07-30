import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchIssuesAsync, Issue } from "../../features/issues/issuesSlice";
import IssueCard from "../../components/IssueCard";

const PageName = styled.div`
  position: relative;
  margin: 100px 0 0 20px;
  font-size: 40px;
`;

const IssueListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ErrorMessage = styled.div`
  color: var(--color-red);
`;

export default function Home() {
  const issues = useAppSelector((state) => state.issues);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIssuesAsync());
  }, [dispatch]);

  return (
    <>
      <PageName>Home</PageName>
      <IssueListWrapper>
        {!issues.isLoading && issues.issues.length ? (
          <ul>
            {issues.issues
              .slice()
              .sort(
                (a: Issue, b: Issue): number =>
                  Number(b.comments) - Number(a.comments)
              )
              .map((issue) => (
                <IssueCard key={uuidv4()} data={issue} />
              ))}
          </ul>
        ) : null}
      </IssueListWrapper>
      {issues.isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {issues.isError && <ErrorMessage>{issues.error}</ErrorMessage>}
    </>
  );
}

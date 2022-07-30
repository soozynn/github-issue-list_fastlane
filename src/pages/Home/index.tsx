import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchIssuesAsync, Issue } from "../../features/issues/issuesSlice";
import IssueBox from "../../components/IssueBox";

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
      {issues.isLoading && <div>Loading...</div>}
      {issues.isError && <ErrorMessage>{issues.error}</ErrorMessage>}
      {!issues.isLoading && issues.issues.length ? (
        <ul>
          {issues.issues
            .slice()
            .sort(
              (a: Issue, b: Issue): number =>
                Number(b.comments) - Number(a.comments)
            )
            .map((issue) => (
              <IssueBox key={uuidv4()} data={issue} />
            ))}
        </ul>
      ) : null}
    </>
  );
}

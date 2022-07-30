import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { v4 as uuidv4 } from "uuid";

import { fetchIssuesAsync } from "../features/issues/issuesSlice";
import Issue from "../components/Issue";

export default function App() {
  const issues = useAppSelector((state) => state.issues);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIssuesAsync());
  }, [dispatch]);

  return (
    <>
      {issues.isLoading && <div>Loading...</div>}
      {issues.isError && <div>{issues.error}</div>}
      {!issues.isLoading && issues.issues.length ? (
        // 커멘츠 많은 수대로 정렬
        // 작성일은 YYYY-MM-DD hh:mm:ss 형식
        <ul>
          {issues.issues.map((issue) => (
            <Issue key={uuidv4()} />
          ))}
        </ul>
      ) : null}
    </>
  );
}

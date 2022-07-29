import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { v4 as uuidv4 } from "uuid";

import { getIssuesAsync } from "../features/issues/issuesSlice";
import Issue from "../components/Issue";

export default function App() {
  const issues = useAppSelector((state) => state.issues);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIssuesAsync());
  }, [dispatch]);

  return (
    <>
      {issues.loading && <div>Loading...</div>}
      {!issues.loading && issues.issues.length ? (
        // 커멘츠 많은 수대로 정렬
        // 작성일은 YYYY-MM-DD hh:mm:ss 형식
        <ul>
          {issues.issues.map((issue) => (
            <Issue key={uuidv4()} />
            // <li key={uuidv4()}>
            //   <img src={issue.image} alt="avatar" />
            //   {issue.number}
            //   <br />
            //   {issue.title}
            //   <br />
            //   {issue.created_at}
            //   <br />
            //   {issue.comments}
            //   <br />
            // </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

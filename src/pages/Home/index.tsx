import React, { useEffect } from "react";
import styled from "styled-components";

// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
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
  font-size: var(--size-medium);
`;

const ErrorMessage = styled.div`
  color: var(--color-red);
`;

// const Loader = styled.div`
//   font-size: var(--size-medium);
// `;

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);
  const issues = useAppSelector((state) => state.issues);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!issues.issues.length) {
      dispatch(fetchIssuesAsync());
    }
  }, [dispatch, issues.issues.length]);

  // const getMoreCard = async () => {
  //   setIsLoaded(true);
  // };

  // const onIntersect: IntersectionObserverCallback = async (
  //   [entry],
  //   observer
  // ) => {
  //   if (entry.isIntersecting && !isLoaded) {
  //     observer.unobserve(entry.target);
  //     await getMoreCard();
  //     observer.observe(entry.target);
  //   }
  // };

  // const { setTarget } = useIntersectionObserver({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  //   onIntersect,
  // });

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
                <IssueCard key={issue.id} data={issue} />
              ))}
          </ul>
        ) : null}
      </IssueListWrapper>
      {issues.isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {issues.isError && <ErrorMessage>{issues.errorMessage}</ErrorMessage>}
      {/* <div ref={setTarget}>{isLoaded && <Loader>Loading...</Loader>}</div> */}
    </>
  );
}

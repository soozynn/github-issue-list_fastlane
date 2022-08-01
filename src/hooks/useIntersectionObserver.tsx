import { useEffect, useState } from "react";
import PropTypes from "prop-types";

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export default function useIntersectionObserver({
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useIntersectionObserverProps) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
}

useIntersectionObserver.propTypes = {
  root: PropTypes.oneOf([null]),
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  onIntersect: PropTypes.func.isRequired,
};

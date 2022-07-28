import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div className="App"></div>;
}

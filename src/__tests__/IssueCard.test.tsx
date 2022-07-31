import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import IssueCard from "../components/IssueCard/index";

describe("IssueCard component test", () => {
  it("renders Issue text", () => {
    const data = {
      title: "test",
      number: 123,
      created_at: "1998-05-27 06:20:11",
      comments: 2,
      user: {
        avatar_url: "https://avatars.githubusercontent.com/u/13822246?v=4",
        id: 123123,
      },
    };
    render(<IssueCard data={data} />);

    const image = screen.getByAltText("avatar");
    const number = screen.getByText(/Issue Number: 123/i);
    const title = screen.getByText(/Title: test/i);
    const comments = screen.getByText(/Comments: 2/i);

    expect(image).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/13822246?v=4"
    );
    expect(image).toHaveAttribute("alt", "avatar");
    expect(image).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(comments).toBeInTheDocument();
  });
});

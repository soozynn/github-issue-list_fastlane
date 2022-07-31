import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import About from "../pages/About/index";

describe("About component test", () => {
  it("renders About page name", () => {
    render(<About />);
    const pageName = screen.getByText(/About/i);
    expect(pageName).toBeInTheDocument();
  });
});

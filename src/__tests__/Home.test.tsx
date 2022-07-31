import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import Home from "../pages/Home/index";

describe("Home component test", () => {
  it("renders Home text", () => {
    render(<Home />);
    // mock data 설정 필요

    const pageName = screen.getByText(/Home/i);
    expect(pageName).toBeInTheDocument();
  });
});

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-styled-components";

import Navbar from "../components/Navbar/index";

describe("Navbar component test", () => {
  it("renders Navbar Link name", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const homeLinkText = screen.getByText(/Home/i);
    const aboutLinkText = screen.getByText(/About/i);
    const logo = screen.getByText(/Issue List_sujin/i);

    expect(homeLinkText).toBeInTheDocument();
    expect(aboutLinkText).toBeInTheDocument();
    expect(logo).toBeInTheDocument();

    userEvent.click(screen.getByText(/About/));
    expect(screen.getByText(/About/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/Home/));
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

//pawsnap\src\components\__tests__\Navbar.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

//keep mock file on top this ensures Jest properly mocks the PNG import before rendering.
jest.mock("../../assets/pawsnap-logo.png", () => "mock-logo.png");

describe("Navbar Component", () => {
  test("renders the navigation bar with logo and About button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /pawsnap/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  test("navigates to About page when About button is clicked", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    await userEvent.click(screen.getByRole("link", { name: /about/i }));

    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });
});

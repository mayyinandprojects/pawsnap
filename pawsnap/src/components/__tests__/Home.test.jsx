//pawsnap\src\components\__tests__\Home.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home Component", () => {
  test("Home page renders the title Pawsnap", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", { name: /pawsnap/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/The Random Animal Image Generator/i)
    ).toBeInTheDocument();
  });

  test("Home page displays 3 buttons - Cat, Dog and Fox", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByTestId("select-cat")).toBeInTheDocument();
    expect(screen.getByTestId("select-dog")).toBeInTheDocument();
    expect(screen.getByTestId("select-fox")).toBeInTheDocument();
  });

  test("Only one animal select button is selected at a time", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const catButton = screen.getByTestId("select-cat");
    const dogButton = screen.getByTestId("select-dog");
    const foxButton = screen.getByTestId("select-fox");

    // Initially, no buttons are selected, except cat is selected by default
    expect(dogButton).not.toHaveClass("selected");
    expect(foxButton).not.toHaveClass("selected");

    // Click the "Dog" button
    fireEvent.click(dogButton);

    // Now, "Dog" should be selected
    expect(dogButton).toHaveClass("selected");

    // "Cat" should no longer be selected
    expect(catButton).not.toHaveClass("selected");

    // "Fox" should still not be selected
    expect(foxButton).not.toHaveClass("selected");
  });
});

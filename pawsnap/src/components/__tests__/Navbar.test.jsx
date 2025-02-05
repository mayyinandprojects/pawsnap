import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("renders the navigation bar with logo and About button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  expect(screen.getByRole("link", { name: /pawsnap/i })).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();

  test("navigates to About page when About button is clicked", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    await userEvent.click(screen.getByRole("link", { name: /about/i }));

    expect(screen.getByRole("link", { name: /about/i })).tobeInTheDocument();
  });
});

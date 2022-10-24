import "intersection-observer";
import HomePage from "../../../pages/index";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchMedia, renderWithContext, withPageBase } from "@/lib/mocks";

matchMedia();

test.skip("should display announcement bar", async () => {
  renderWithContext(withPageBase(<HomePage />), {});
  await screen.findByText(/Visual Data Preparation Made for All/i);

  expect(screen.queryByTestId("announcement-bar")).toBeInTheDocument();
});

test.skip("should close announcement bar", async () => {
  renderWithContext(withPageBase(<HomePage />), {});
  await screen.findByTestId("announcement-bar");

  userEvent.click(screen.getByTestId("close-announcement-bar"));

  expect(screen.queryByTestId("announcement-bar")).not.toBeInTheDocument();
});

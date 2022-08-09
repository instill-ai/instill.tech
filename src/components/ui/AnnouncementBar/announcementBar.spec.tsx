import "intersection-observer";
import HomePage from "../../../pages/index";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchMedia, renderWithContext, withPageBase } from "@/lib/mocks";

matchMedia();

test("should display announcement bar", async () => {
  renderWithContext(withPageBase(<HomePage />), {});
  await screen.findByText(/Visual Data Preparation Made for All/i);

  expect(
    screen.getByText(
      /got five minutes\? participate our data \+ vision ai survey 2022\./i
    )
  ).toBeInTheDocument();
});

test("should close announcement bar", async () => {
  renderWithContext(withPageBase(<HomePage />), {});
  await screen.findByText(
    /got five minutes\? participate our data \+ vision ai survey 2022\./i
  );

  userEvent.click(screen.getByTestId("close-announcement-bar"));

  expect(
    screen.queryByText(
      /got five minutes\? participate our data \+ vision ai survey 2022\./i
    )
  ).not.toBeInTheDocument();
});

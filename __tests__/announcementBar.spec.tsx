import "intersection-observer";
import "../__mocks__/matchMedia";

import { renderWithContext, withPageBase } from "../lib/testUtils";
import HomePage from "../src/pages/index";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Mix } from "./Mix";

describe("<Mix />", () => {
  test("it should mount", () => {
    render(<Mix />);

    const mix = screen.getByTestId("Mix");

    expect(mix).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Brands } from "./Brands";

describe("<Brands />", () => {
  test("it should mount", () => {
    render(<Brands />);

    const brands = screen.getByTestId("Brands");

    expect(brands).toBeInTheDocument();
  });
});

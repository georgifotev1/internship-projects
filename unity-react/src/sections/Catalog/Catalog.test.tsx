import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Catalog } from "./Catalog";

describe("<Women />", () => {
  test("it should mount", () => {
    render(<Catalog />);

    const women = screen.getByTestId("Women");

    expect(women).toBeInTheDocument();
  });
});

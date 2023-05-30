import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Accsessories } from "./Accsessories";

describe("<Accsessories />", () => {
  test("it should mount", () => {
    render(<Accsessories />);

    const accsessories = screen.getByTestId("Accsessories");

    expect(accsessories).toBeInTheDocument();
  });
});

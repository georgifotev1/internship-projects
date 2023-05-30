import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SocialMedia } from "./SocialMedia";

describe("<SocialMedia />", () => {
  test("it should mount", () => {
    render(<SocialMedia />);

    const socialMedia = screen.getByTestId("SocialMedia");

    expect(socialMedia).toBeInTheDocument();
  });
});

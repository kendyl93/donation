import { screen } from "@testing-library/react";
import { Chevron, DIRECTIONS } from "../Chevron";
import { renderWithTheme } from "../../../testSetup/utils";

describe("Chevron", () => {
  it("should match the snapshot with the left direction", () => {
    const { asFragment } = renderWithTheme(<Chevron />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Chevron pointing left as default", () => {
    renderWithTheme(<Chevron />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });

  it("should match the snapshot with the right direction", () => {
    const { asFragment } = renderWithTheme(
      <Chevron direction={DIRECTIONS.RIGHT} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Chevron pointing right when direction is RIGHT", () => {
    renderWithTheme(<Chevron direction={DIRECTIONS.RIGHT} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });
});

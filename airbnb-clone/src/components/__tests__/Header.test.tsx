import { render, screen } from "@testing-library/react";
import Header from "../../app/components/Header/Header";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});


describe("Header component", () => {
  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getAllByAltText(/logo/i).length).toBeGreaterThan(0);

  });

  it("renders menu items", () => {
    render(<Header />);

    expect(screen.getAllByText("Acomodações").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experiências").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Serviços").length).toBeGreaterThan(0);
  });
});

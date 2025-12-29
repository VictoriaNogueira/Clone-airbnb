import { render, screen } from "@testing-library/react";
import RoomPagination from "../../app/components/RoomPagination";

jest.mock("next/link", () => {
  return ({
    href,
    children,
    className,
  }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
});

describe("RoomPagination component", () => {
  it("renders the correct number of page links", () => {
    render(<RoomPagination currentPage={1} totalPages={4} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });

  it("highlights the active page", () => {
    render(<RoomPagination currentPage={2} totalPages={4} />);

    const activePage = screen.getByText("2");

    expect(activePage).toHaveClass("bg-black");
    expect(activePage).toHaveClass("text-white");
  });

  it("renders correct href for each page", () => {
    render(<RoomPagination currentPage={1} totalPages={3} />);

    expect(screen.getByText("1")).toHaveAttribute("href", "/?page=1");
    expect(screen.getByText("2")).toHaveAttribute("href", "/?page=2");
    expect(screen.getByText("3")).toHaveAttribute("href", "/?page=3");
  });
});

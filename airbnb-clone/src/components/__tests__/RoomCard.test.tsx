import { render, screen } from "@testing-library/react";
import RoomCard from "../../app/components/RoomCard";

// mock do next/link
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

// mock do next/image
jest.mock("next/image", () => {
  return ({ src, alt }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  );
});

/* testes */

describe("RoomCard component", () => {
  const roomMock = {
    id: "1",
    photo: "/test.jpg",
    city: "São Paulo",
    pricePerDay: 123.7,
    reviewNote: 4.8,
    availableDays: 12,
  };

  it("renders room city", () => {
    render(<RoomCard {...roomMock} />);

    expect(screen.getByText("São Paulo")).toBeInTheDocument();
  });

  it("renders room price per day rounded", () => {
    render(<RoomCard {...roomMock} />);

    expect(screen.getByText("R$ 124")).toBeInTheDocument();
    expect(screen.getByText("por dia")).toBeInTheDocument();
  });

  it("renders review note", () => {
    render(<RoomCard {...roomMock} />);

    expect(screen.getByText("4.8")).toBeInTheDocument();
  });

  it("renders available days", () => {
    render(<RoomCard {...roomMock} />);

    expect(
      screen.getByText("Disponível por 12 dias")
    ).toBeInTheDocument();
  });

  it("renders image with city as alt text", () => {
    render(<RoomCard {...roomMock} />);

    expect(
      screen.getByAltText("São Paulo")
    ).toBeInTheDocument();
  });

  it("links to the correct room page", () => {
    render(<RoomCard {...roomMock} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/rooms/1");
  });
});

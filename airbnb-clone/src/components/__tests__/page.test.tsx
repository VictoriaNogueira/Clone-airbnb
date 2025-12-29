import { render, screen } from "@testing-library/react";
import Home from "../../app/(pages)/(home)/page";
import { Room } from "@/types/Room";

// mock do service
jest.mock("@/services/rooms", () => ({
  getRooms: jest.fn(),
}));

// mock do RoomCard
jest.mock("@/app/components/RoomCard", () => {
  return ({ city }: any) => <div>{city}</div>;
});

// mock do RoomPagination
jest.mock("@/app/components/RoomPagination", () => {
  return () => <div>Pagination</div>;
});

import { getRooms } from "@/services/rooms";

describe("Home page", () => {
  it("renders rooms and pagination", async () => {
    const roomsMock: Room[] = [
  {
    id: "1",
    photo: "/test.jpg",
    city: "São Paulo",
    pricePerDay: 120,
    reviewNote: 4.8,
    availableDays: 10,   
    description: "Quarto confortável",
    createdAt: "2024-01-01",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    id: "2",
    photo: "/test.jpg",
    city: "Rio de Janeiro",
    pricePerDay: 150,
    reviewNote: 4.6,
    availableDays: 8,

    description: "Apartamento próximo à praia",
    createdAt: "2024-01-02",
    latitude: -22.9068,
    longitude: -43.1729,
  },
];

    (getRooms as jest.Mock).mockResolvedValue(roomsMock);

    render(
      await Home({
        searchParams: { page: "1" },
      })
    );

    // título
    expect(
      screen.getByText("Acomodações muito procuradas")
    ).toBeInTheDocument();

    // rooms
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
    expect(screen.getByText("Rio de Janeiro")).toBeInTheDocument();

    // paginação
    expect(screen.getByText("Pagination")).toBeInTheDocument();
  });
});

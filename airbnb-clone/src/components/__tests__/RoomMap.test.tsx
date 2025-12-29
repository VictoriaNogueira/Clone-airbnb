import { render, screen } from "@testing-library/react";
import RoomMap from "../../app/components/RoomMap";

describe("RoomMap component", () => {
  it("renders the OpenStreetMap iframe", () => {
    render(<RoomMap lat={-23.5505} lng={-46.6333} />);

    expect(screen.getByTitle("OpenStreetMap")).toBeInTheDocument();
  });

  it("builds the map URL with latitude and longitude", () => {
    const lat = -23.5505;
    const lng = -46.6333;

    render(<RoomMap lat={lat} lng={lng} />);

    const iframe = screen.getByTitle("OpenStreetMap");

    expect(iframe.getAttribute("src")).toContain(`${lat},${lng}`);
  });
});

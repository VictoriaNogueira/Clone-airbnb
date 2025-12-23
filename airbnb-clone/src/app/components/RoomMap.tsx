"use client";

type MapProps = {
  lat: number;
  lng: number;
};

export default function RoomMap({ lat, lng }: MapProps) {
  return (
    <iframe
      width="50%"
      height="400"
      loading="lazy"
      style={{ border: 0, borderRadius: "12px" }}
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        lng - 0.01
      },${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`}
    />
  );
}

"use client";

type MapProps = {
  lat: number;
  lng: number;
};

export default function RoomMap({ lat, lng }: MapProps) {
  return (
    <div className="absoute inset-0">    
      <iframe
        className="w-full h-full rounded-xl"
        loading="lazy"
        style={{ border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${
          lng - 0.01
        },${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`}
      />
    </div>
  );
}

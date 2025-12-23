import RoomMap from "@/app/components/RoomMap";
import { getRoomByID } from "@/services/rooms";
import Image from "next/image";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
};

export default async function RoomPage({ params }: Props) {
  const { id } = await params;
  const room = await getRoomByID(id);

  return (
    <main className="p-10">
      <h1>{room.city}</h1>
      <div className="rounded-2xl shadow p-4 bg-white space-y-2">
        <div className="relative h-40 w-full rounded-xl overflow-hidden">
          <Image src={room.photo}
                alt={room.city}
                fill
                sizes="(max-width: 640px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 33vw,
                    20vw"
                className="object-cover"/>
        </div>
      </div> 
      <p>Dias disponíveis: {room.availableDays}</p>
      <p>Descrição: {room.description}</p>
      <p>Localização</p>
      <RoomMap
        lat={room.latitude}
        lng={room.longitude}
      />
    </main>
  );
}






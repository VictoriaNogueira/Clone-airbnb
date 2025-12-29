import RoomMap from "@/app/components/RoomMap";
import { Dot, Star } from "lucide-react";
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

    <main className="page-room pt-6 space-y-8">
      <div className="text-xl font-semibold text-gray-900">
        {room.city}
      </div>
      <div className="grid place-items-center">
        <div className=" relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] aspect-video rounded-xl overflow-hidden">
          <Image
            src={room.photo}
            alt={room.city}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
            priority
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 text-gray-500 text-sm">
        <span>R$ {Math.round(room.pricePerDay)} por dia</span>
        <Dot className="w-3 h-3 text-gray-400 fill-gray-500" />
        <div className="flex items-center gap-1">
          <Star className="w-2 h-2 text-gray-500 fill-gray-500" />
          <span>{room.reviewNote}</span>
        </div>
        <Dot className="w-3 h-3 text-gray-400 fill-gray-500" />
        <span>Dias disponíveis: {room.availableDays}</span>
      </div>
      <div className="text-sm text-gray-500">
        <span>Descrição: {room.description}</span>
      </div>

      <div className="h-px bg-gray-200"></div>

      <section className="space-y-3">
        <div className="text-base font-semibold text-gray-900">
              <p>Onde você estará</p>
            </div>
        <div className="grid place-items-center">
          <div className=" relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] aspect-video rounded-xl overflow-hidden">            
            <RoomMap lat={room.latitude} lng={room.longitude} />
          </div>
          <p className="text-gray-500 text-sm">
          A localização desta acomodação foi verificada.
        </p>
        </div>        
      </section>

      <div className="h-px bg-gray-300"></div>

    </main>
  );
};







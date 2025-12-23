import RoomCard from "@/app/components/RoomCard";

import { getRooms } from "@/services/rooms";
import RoomPagination from "@/app/components/RoomPagination";
import { Room } from "@/types/Room";

type HomeProps = {
  searchParams: {
    page?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;
  const currentPage = Number(page ?? 1);
  const rooms = await getRooms(currentPage);

  return ( 
     <div className="title font-semibold text-black ">     
      <h1>Acomodações muito procuradas</h1>     
      <main className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {rooms.map((room: Room) => (
          <RoomCard 
            key={room.id}
            id={room.id}
            photo={room.photo}
            city={room.city}
            pricePerDay={room.pricePerDay}
            reviewNote={room.reviewNote}
            availableDays={room.availableDays}
          />
        ))}
          
      </main>
      <RoomPagination currentPage={currentPage} />
      </div>
  );
}
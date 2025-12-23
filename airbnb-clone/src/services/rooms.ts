import { Room } from "@/types/Room";

// Lista (Home)
export async function getRooms(page:number=1):Promise<Room[]> {
  const limite = 14;
  const res = await fetch(
    `https://6924c58582b59600d7214c7b.mockapi.io/montreal/api/v1/rooms?page=${page}&limit=${limite}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar rooms");
  }

  return res.json();
}

// Room individual
export async function getRoomByID(id: string):Promise<Room> {
  const res = await fetch(
    `https://6924c58582b59600d7214c7b.mockapi.io/montreal/api/v1/rooms/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar room");
  }

  return res.json();
}

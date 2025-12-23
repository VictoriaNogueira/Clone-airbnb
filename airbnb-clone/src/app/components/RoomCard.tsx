import Image from "next/image";
import { Star, Dot } from "lucide-react";
import Link from "next/link";

interface RoomProps {
  id: string;
  photo: string;
  city: string;
  pricePerDay: number;
  reviewNote: number;
  availableDays: number;
}

export default function Room({
  id,
  photo,
  city,
  pricePerDay,
  reviewNote,
  availableDays,
}: RoomProps) {
  return (
    <Link href={`/rooms/${id}`} className="block">
      <div className="">          
        <div className="rounded-2xl shadow p-4 bg-white space-y-2">
          <div className="relative h-40 w-full rounded-xl overflow-hidden">
            <Image
              src={photo}
              alt={city}
              fill
              sizes="(max-width: 640px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 33vw,
                    20vw"
              className="object-cover"
            />
          </div>
        </div>  
          <h3 className="font-semibold text-black text-sm">{city}</h3>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <span>R$ {Math.round(pricePerDay)}</span>
            <span>por dia</span>  
            <Dot className="w-3 h-3 text-gray-400 fill-gray-500"/>                     
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Star className="w-2 h-2 text-gray-500 fill-gray-500"/>            
              <span>{reviewNote}</span> 
            </div>       
          </div>                
          <p className="text-xs text-gray-500">
            Disponível por {availableDays} dias
          </p>         
      </div>    
    </Link>
  );
}

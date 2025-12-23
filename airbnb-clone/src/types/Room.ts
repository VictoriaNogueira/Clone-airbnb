export interface Room {
  id: string;
  createdAt: string;
  pricePerDay: number;
  photo: string;
  reviewNote: number;
  availableDays: number;
  city: string;
  description: string;
  latitude: number;
  longitude: number;
}
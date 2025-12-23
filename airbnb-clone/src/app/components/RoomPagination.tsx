import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages?: number;
};

export default function RoomPagination({
  currentPage,
  totalPages = 6,
}: PaginationProps) {
  return (
    <nav className="flex justify-center gap-2 py-8">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={`/?page=${page}`}
            className={`px-4 py-2 rounded-full border text-sm
              ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}

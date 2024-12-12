import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="page-container">
      <section className="w-full ">
        <Skeleton className="h-10 w-1/3 mb-3" />
        <div className="total-size-section">
          <Skeleton className="h-8 w-20 md:w-10" />
          <Skeleton className="h-10 md:w-32 md:ml-4 w-full ml-0 mt-3 md:mt-0" />
        </div>
      </section>
      <section className="file-list">
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            className=" p-5 shadow-sm transition-all rounded-[18px] hover:shadow-drop-3 h-52 w-full mb-4"
          />
        ))}
      </section>
    </div>
  );
}

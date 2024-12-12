import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="dashboard-container">
      {/* Chart Section */}
      <section>
        <Skeleton className=" rounded-[20px] p-2 h-40 w-full mb-6" />

        {/* Uploaded file type summaries */}
        <ul className="dashboard-summary-list">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="mt-6 rounded-[20px] bg-white p-4 transition-all hover:scale-105 space-y-4 border"
            >
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-16 w-16 rounded-full" />
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-6 mx-auto  w-1/3" />
              <Separator className="bg-gray-200 opacity-50 animate-pulse" />
              <Skeleton className="h-4 w-1/3 mx-auto" />
            </div>
          ))}
        </ul>
      </section>

      {/* Recent Files Section */}
      <section className="dashboard-recent-files mt-8">
        <Skeleton className="h-8 w-1/3 mb-6" />

        <ul className="mt-5 flex flex-col gap-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 border rounded-lg p-4"
            >
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="flex flex-col gap-1 w-full">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <Skeleton className="h-8 w-4 ml-auto" />
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DashboardSkeleton;

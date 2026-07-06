export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-200 font-sans flex flex-col items-center justify-center p-4">
      {/* Container matching your page structures */}
      <div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 animate-pulse">
        
        {/* LEFT COLUMN SKELETON: Main Arcade Interface */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-800 bg-gradient-to-b from-neutral-900 to-black space-y-8">
          <div>
            {/* Header / Title Skeleton */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-7 w-40 bg-neutral-800 rounded-md"></div>
              <div className="h-5 w-20 bg-neutral-800 rounded"></div>
            </div>
            
            {/* Description Text Lines Skeleton */}
            <div className="space-y-2 mb-8">
              <div className="h-4 w-full bg-neutral-800 rounded"></div>
              <div className="h-4 w-5/6 bg-neutral-800 rounded"></div>
            </div>

            {/* Dashboard Score Box Skeletons */}
            <div className="grid grid-cols-2 gap-4 bg-neutral-950 border border-neutral-800 p-4 rounded-xl">
              <div className="space-y-2 py-1 md:pl-4">
                <div className="h-3 w-16 bg-neutral-800 rounded"></div>
                <div className="h-8 w-24 bg-neutral-800 rounded-lg"></div>
              </div>
              <div className="space-y-2 py-1 md:pl-4 border-l border-neutral-800">
                <div className="h-3 w-20 bg-neutral-800 rounded"></div>
                <div className="h-8 w-24 bg-neutral-800 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Large Action Button Skeleton */}
          <div className="w-full h-14 bg-neutral-800 rounded-xl mt-4"></div>
        </div>

        {/* RIGHT COLUMN SKELETON: Leaderboard List */}
        <div className="md:col-span-5 p-6 sm:p-8 bg-neutral-950/50 flex flex-col justify-between">
          <div>
            {/* Leaderboard Header Skeleton */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
              <div className="h-5 w-5 bg-neutral-800 rounded-full"></div>
              <div className="h-4 w-44 bg-neutral-800 rounded"></div>
            </div>

            {/* Top 10 List Row Skeletons */}
            <div className="space-y-3">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <div className="flex items-center gap-3 w-full">
                    <div className="h-3 w-4 bg-neutral-800 rounded"></div>
                    <div className="h-3.5 w-1/2 bg-neutral-800 rounded"></div>
                  </div>
                  <div className="h-3.5 w-10 bg-neutral-800 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
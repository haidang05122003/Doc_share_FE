export function Hero() {
  return (
    <div className="relative bg-emerald-700 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Get inspired to create something great.
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3">
        <div className="relative h-full w-full">
          <div className="absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-yellow-300/80 blur-lg" />
        </div>
      </div>
    </div>
  )
}


import Image from "next/image";

export default function Gallery() {
  const images = [
    "/gallery/setup-1.jpg",
    "/gallery/setup-2.jpg",
    "/gallery/setup-3.jpg",
    "/gallery/setup-4.jpg",
    "/gallery/setup-5.jpg",
    "/gallery/setup-6.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 font-kanit">
        <h1 className="text-4xl font-bold text-white mb-2">
          {" "}
          <span className="text-blue-500">Development Gallery</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="text-slate-400 mt-4">Behind the scenes & Coding Setup</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative h-72 w-full rounded-xl overflow-hidden group border border-slate-700/50 cursor-pointer"
          >
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

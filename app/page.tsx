import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 overflow-hidden font-kanit">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] -z-10"></div>

      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-3xl w-full transform transition-all duration-500 hover:shadow-blue-900/20 hover:border-slate-600/50">
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"></div>
          <Image
            src="/profile.jpg"
            alt="Jirayu Nitiruangwechkul"
            width={160}
            height={160}
            className="rounded-full border-2 border-slate-500/50 relative z-10 object-cover group-hover:border-blue-400 transition-colors duration-500"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight font-inter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
          Jirayu Nitiruangwechkul{" "}
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-roboto-mono font-medium">
          Software Developer <span className="text-blue-500 mx-2">|</span>{" "}
          Frontend Developer
        </h2>

        <p className="max-w-2xl text-slate-400 leading-relaxed mb-10 text-lg">
          นักศึกษาที่มีความสนใจใน Web Development และ Mobile App Development
          พร้อมเรียนรู้เทคโนโลยีใหม่ๆ
          เพื่อสร้างโซลูชันที่มีประสิทธิภาพในโลกความเป็นจริง
        </p>

        <div className="flex flex-col sm:flex-row gap-6 font-inter w-full sm:w-auto">
          <a
            href="/resume.png"
            download="Jirayu_Resume.png"
            className="group relative px-8 py-3 bg-transparent border border-blue-500 text-blue-400 overflow-hidden rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-400"
          >
            <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
            <span className="group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              DOWNLOAD RESUME
            </span>
          </a>

          <Link
            href="/contact"
            className="px-8 py-3 bg-slate-100 text-slate-900 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all rounded-full font-bold flex items-center justify-center"
          >
            ติดต่อฉัน
          </Link>
        </div>
      </div>
    </div>
  );
}

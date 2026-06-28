import Image from "next/image";

const projects = [
  {
    name: "Cake Shop Mobile App",
    desc: "แอปพลิเคชันอีคอมเมิร์ซสำหรับร้านเบเกอรี่ พัฒนาแบบ Cross-platform เน้นการออกแบบ UI/UX ที่ทันสมัยและการจัดการ State ของแอปพลิเคชัน",
    tech: ["Flutter", "Dart"],
    role: "Mobile Developer",
    year: "2026",
    img: "/projects/mobile-application-cake.png",
    githubUrl: "https://github.com/COPTER-11/flutter_cake_shop_app",
  },
  {
    name: "Run Tracker Application",
    desc: "แอปพลิเคชันติดตามการวิ่งและบันทึกสถิติการออกกำลังกาย พัฒนาด้วย React Native เพื่อรองรับการทำงานแบบ Cross-platform",
    tech: ["React Native", "JavaScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    img: "/projects/rn-run-tracker.png",
    githubUrl: "https://github.com/COPTER-11/rn-run-tracker-app",
  },
  {
    name: "Personal Money Tracking App",
    desc: "แอปพลิเคชันบริหารจัดการการเงินส่วนบุคคล บันทึกรายรับ-รายจ่าย พร้อมระบบสรุปผลด้วยแผนภูมิเพื่อช่วยวิเคราะห์พฤติกรรมการใช้เงิน",
    tech: ["React Native", "JavaScript", "Expo"],
    role: "Mobile Developer",
    year: "2026",
    img: "/projects/rn-money-tracker.png",
    githubUrl: "https://github.com/COPTER-11/rn-money-tracking-app",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto font-kanit">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          {" "}
          <span className="text-blue-500">Featured Projects</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col backdrop-blur-sm"
          >
            {/* Project Image */}
            <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.name}
                fill
                className="object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {proj.name}
                </h2>
                <p className="text-slate-400 text-sm mb-4">{proj.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 font-roboto-mono text-xs mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Section: ข้อมูลตำแหน่ง + ปุ่ม Link ไป GitHub */}
              <div className="space-y-4 pt-4 border-t border-slate-700/60 mt-auto">
                <div className="text-sm text-slate-300 flex justify-between items-center">
                  <span>
                    <strong className="text-white">Role:</strong> {proj.role}
                  </span>
                  <span className="text-xs text-slate-500 font-roboto-mono">
                    {proj.year}
                  </span>
                </div>

                {/* GitHub Redirect Button */}
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 shadow-inner group/btn"
                >
                  {/* GitHub SVG Icon */}
                  <svg
                    className="w-5 h-5 fill-current transition-transform group-hover/btn:scale-110"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

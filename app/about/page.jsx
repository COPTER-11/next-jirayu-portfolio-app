export default function About() {
  return (
    <div className="max-w-5xl mx-auto font-kanit pb-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          <span className="text-blue-500">About Me</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-3">
              <span className="text-blue-500">👤</span> ข้อมูลส่วนตัว
            </h2>
            <ul className="space-y-4 text-slate-300 text-sm md:text-base">
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">
                  ชื่อ-นามสกุล:
                </span>
                <span className="text-right">จิรายุ นิติเรืองเวชกุล</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">ชื่อเล่น:</span>
                <span className="text-right">คอปเตอร์ (Copter)</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">วันเกิด:</span>
                <span className="text-right">02/01/2005</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">อายุ:</span>
                <span className="text-right">21 ปี</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">สัญชาติ:</span>
                <span className="text-right">ไทย</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="font-semibold text-slate-400">
                  ที่พักปัจจุบัน:
                </span>
                <span className="text-right">เขตบางแค, กรุงเทพมหานคร</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-500">🎯</span> Career Objective
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              มุ่งมั่นที่จะเป็น Software Engineer ระดับมืออาชีพ
              ต้องการนำความรู้ด้าน Web และ Mobile Development
              มาประยุกต์ใช้ในการสร้างซอฟต์แวร์ที่ใช้งานได้จริง
              พร้อมเปิดรับเทคโนโลยีใหม่ๆ เพื่อพัฒนาศักยภาพของตนเองอย่างต่อเนื่อง
            </p>
          </section>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-500">🎓</span> ประวัติการศึกษา
            </h2>

            <div className="relative border-l-2 border-slate-700 ml-3 md:ml-4 space-y-8">
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                <h3 className="text-lg font-bold text-white">
                  มหาวิทยาลัยเอเชียอาคเนย์ (South-East Asia University)
                </h3>
                <p className="text-blue-400 text-sm font-roboto-mono mb-2">
                  2025 - ปัจจุบัน (DEK68)
                </p>
                <p className="text-slate-300 text-sm">
                  คณะศิลปศาสตร์และวิทยาศาสตร์ สาขาเทคโนโลยีดิจิทัลและนวัตกรรม
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                <h3 className="text-lg font-bold text-white">
                  วิทยาลัยเทคโนโลยีการจัดการเพชรเกษม (PM-TECH)
                </h3>
                <p className="text-slate-400 text-sm font-roboto-mono mb-2">
                  2023 - 2025
                </p>
                <p className="text-slate-300 text-sm">
                  ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีสารสนเทศ
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                <h3 className="text-lg font-bold text-white">
                  วิทยาลัยเทคโนโลยีการจัดการเพชรเกษม (PM-TECH)
                </h3>
                <p className="text-slate-400 text-sm font-roboto-mono mb-2">
                  2020 - 2023
                </p>
                <p className="text-slate-300 text-sm">
                  ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาคอมพิวเตอร์ธุรกิจ
                </p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">💪</span> จุดแข็ง (Strengths)
              </h2>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>
                    <strong>Fast Learner:</strong>{" "}
                    สามารถศึกษาเทคโนโลยีและเครื่องมือใหม่ๆ ด้วยตัวเองได้รวดเร็ว
                    เช่น React, Next.js และ n8n
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>
                    <strong>Problem Solving:</strong>{" "}
                    มีความพยายามในการค้นคว้าหาข้อมูลเพื่อแก้ปัญหาบั๊กหรือข้อผิดพลาดทางโค้ดอย่างเป็นระบบ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>
                    <strong>Responsibility:</strong> มีความรับผิดชอบสูง
                    สามารถจัดสรรเวลาเรียนและการทำโปรเจกต์ส่วนตัวได้อย่างมีประสิทธิภาพ
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">✨</span> ความสนใจ & งานอดิเรก
              </h2>
              <div className="space-y-4 text-slate-300 text-sm">
                <div>
                  <strong className="text-white block mb-1 border-b border-slate-700 pb-1 w-max">
                    ความสนใจ (Interests)
                  </strong>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                    <li>Cybersecurity (มาตรฐาน ISO/IEC 27001)</li>
                    <li>เทคโนโลยียานยนต์ไฟฟ้า (EV Specifications)</li>
                    <li>สไตล์และการออกแบบแฟชั่นแนว Street</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-1 border-b border-slate-700 pb-1 w-max">
                    งานอดิเรก (Hobbies)
                  </strong>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                    <li>ออกกำลังกายพื้นฐาน (Bodyweight) เพื่อรักษาสุขภาพ</li>
                    <li>ฟังเพลง Thai Pop ทั่วไปในช่วงเวลาพักผ่อน</li>
                    <li>ติดตามข่าวสารวงการไอทีและนวัตกรรมใหม่ๆ</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

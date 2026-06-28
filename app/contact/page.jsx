export default function Contact() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center font-kanit py-12">
      <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>

        <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-slate-400 mb-8 relative z-10">
          พร้อมสำหรับความท้าทายใหม่ๆ ในวงการซอฟต์แวร์
        </p>

        <div className="space-y-6 text-left relative z-10">
          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
              📧
            </div>
            <div>
              <p className="text-sm text-slate-500 font-roboto-mono">Email</p>
              <p className="text-white font-medium">ter212548@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
              📱
            </div>
            <div>
              <p className="text-sm text-slate-500 font-roboto-mono">Phone</p>
              <p className="text-white font-medium">094-848-8606</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
              💻
            </div>
            <div>
              <p className="text-sm text-slate-500 font-roboto-mono">GitHub</p>
              <a
                href="https://github.com/COPTER-11"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                github.com/COPTER-11
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 relative z-10">
          <a
            href="/resume.pdf"
            download="Jirayu_Resume.pdf"
            className="w-full inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 font-inter"
          >
            DOWNLOAD FULL RESUME
          </a>
        </div>
      </div>
    </div>
  );
}

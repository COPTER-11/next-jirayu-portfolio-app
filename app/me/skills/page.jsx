export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Flutter"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "PHP", "Dart"],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Docker", "n8n"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto font-kanit">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          <span className="text-blue-500">Technical Skills</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
              <span>{cat.icon}</span> {cat.title}
            </h2>
            <div className="flex flex-wrap gap-3 font-roboto-mono text-sm">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-900/50 text-blue-300 border border-blue-500/20 px-4 py-2 rounded-full shadow-sm cursor-default transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

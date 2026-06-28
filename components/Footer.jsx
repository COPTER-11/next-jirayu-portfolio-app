export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-slate-500 font-roboto-mono text-sm">
      <p>
        &copy; {new Date().getFullYear()} Jirayu Nitiruangwechkul. Built with
        Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}

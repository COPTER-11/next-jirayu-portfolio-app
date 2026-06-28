"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/me/skills" },
    { name: "Projects", path: "/me/projects" },
    { name: "Gallery", path: "/me/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold font-kanit tracking-wide mb-4 md:mb-0">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Jirayu N. | <span className="text-blue-500">Portfolio</span>
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 font-roboto-mono text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`transition-all decoration-blue-500 decoration-2 underline-offset-8 
                    ${
                      isActive
                        ? "text-white underline"
                        : "text-slate-400 hover:text-white hover:underline"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

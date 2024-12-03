import { Github, Linkedin, FileDown } from 'lucide-react';
import resume from "../assets/Resume-TE.pdf";
import me from "../assets/me.jpg";

export default function InfoCard() {
  return (
    <div className="relative flex flex-col sm:flex-row sm:items-start sm:gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-1">Tanner Eschmann</h1>
        <p className="text-lg font-medium mb-1">Floridian Engineer</p>
        <p className="mb-2">I enjoy making and learning things</p>
        <p className="text-sm">eschmanntanner@gmail.com</p>
        <p className="text-sm mb-2">772-766-2918</p>
        <div className="flex items-center gap-4 mt-6">
          <a
            href={resume}
            download="Resume-Tanner-Eschmann.pdf"
            className="border-gray-400 font-semibold border-2 flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:border-white"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <FileDown />
          </a>
          <div className="flex gap-3 text-gray-400">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tanner-eschmann/"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/Broilan"
              aria-label="GitHub"
              className="hover:text-white"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <img
        src={me}
        alt="photo-of-tanner"
        className="hidden sm:block rounded-xl aspect-square w-44 h-52 border-2 border-gray-400"
      />
    </div>
  );
}

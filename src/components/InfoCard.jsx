import { useState } from "react";
import { Github, Linkedin, FileDown, Mail, Phone } from "lucide-react";
import Alert from "./Alert";
import resume from "/Resume-TE.pdf";
import me from "/me.jpg";

export default function InfoCard() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setAlertMessage(`${type} copied to clipboard`);
    setAlertVisible(true);
  };

  return (
    <section className="relative w-full pr-48 [@media(max-width:506px)]:pr-0" aria-labelledby="info-heading">
      <h1 id="info-heading" className="sr-only">About Tanner Eschmann</h1>
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="flex-1 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-1">Tanner Eschmann</h2>
          <p className="text-base sm:text-lg font-medium mb-1">Floridian Engineer</p>
          <p className="text-sm sm:text-base">I enjoy making and learning things</p>
          <div className="flex items-center gap-4 mt-8 text-sm sm:text-base">
            <a
              href={resume}
              download="Resume-Tanner-Eschmann.pdf"
              className="border border-gray-400 dark:border-gray-800 font-semibold flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white"
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
                className="hover:text-black dark:hover:text-white"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/Broilan"
                aria-label="GitHub"
                className="hover:text-black dark:hover:text-white"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <button
                onClick={() => copyToClipboard("772-766-3388", "Phone number")}
                aria-label="Phone Number"
                className="hover:text-black dark:hover:text-white cursor-pointer bg-transparent border-none p-0"
              >
                <Phone />
              </button>
              <button
                onClick={() => copyToClipboard("EschmannTanner@gmail.com", "Email")}
                aria-label="Email"
                className="hover:text-black dark:hover:text-white cursor-pointer bg-transparent border-none p-0"
              >
                <Mail />
              </button>
            </div>
          </div>
        </div>
        <img
          src={me}
          alt="A photo of Tanner Eschmann"
          className="hidden [@media(min-width:507px)]:block rounded-xl object-cover w-32 h-32 lg:w-40 lg:h-40 border-2 border-gray-400 dark:border-white absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
      <Alert
        message={alertMessage}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </section>
  );
}

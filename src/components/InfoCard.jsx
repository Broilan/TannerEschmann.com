import { useState } from "react";
import { Github, Linkedin, FileDown, Mail, Phone } from "lucide-react";
import Alert from "./Alert";
import resume from "/Resume-TE.pdf";
import me from "/me.jpg";

export default function InfoCard() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  // Copy to clipboard function with alert
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setAlertMessage(`${type} copied to clipboard`);
    setAlertVisible(true);
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Info Section */}
      <div className="col-span-1 lg:col-span-2">
        <h1 className="text-4xl font-bold mb-1">Tanner Eschmann</h1>
        <p className="text-lg font-medium mb-1">Floridian Engineer</p>
        <p>I enjoy making and learning things</p>
        <div className="flex items-center gap-4 mt-16 text-sm">
          <a
            href={resume}
            download="Resume-Tanner-Eschmann.pdf"
            className="border-[1px] border-gray-800 font-semibold flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:border-white"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <FileDown />
          </a>
          <div className="flex gap-3 text-gray-400 relative">
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
            <div
              onClick={() => copyToClipboard("772-766-3388", "Phone number")}
              aria-label="Phone"
              className="hover:text-white relative cursor-pointer"
            >
              <Phone />
            </div>
            <div
              onClick={() => copyToClipboard("EschmannTanner@gmail.com", "Email")}
              aria-label="Email"
              className="hover:text-white relative cursor-pointer"
            >
              <Mail />
            </div>
          </div>
        </div>
      </div>

      {/* Photo Section */}
      <img
        src={me}
        alt="photo-of-tanner"
        className="hidden lg:block rounded-xl aspect-square w-full h-auto border-2 border-gray-400"
      />

      {/* Custom Alert */}
      <Alert
        message={alertMessage}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </div>
  );
}

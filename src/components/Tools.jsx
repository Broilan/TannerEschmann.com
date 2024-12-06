import cognimetrics from "../assets/cognimetrics.png";
import TutorCom from "../assets/TutorCom.jpg";
import IRE from "../assets/IRE.png";

export default function Tools() {
  return (
    <div className="bg-gray-950 rounded-lg p-6 mt-4 border-2 border-gray-500 relative max-h-[30rem] overflow-y-auto hide-scrollbar">
      {/* Vertical Line */}
      <div className="absolute top-0 left-[56px] h-full w-[0.5px] bg-gray-400"></div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 relative">
          <img
            src={TutorCom}
            alt="Tutor.com"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Noetica</strong> - Community
            <p className="text-gray-400 text-sm">12/03/2024 - Present</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Assisted students with challenging computer science problems.</li>
              <li>Developed personalized learning strategies for diverse learners.</li>
              <li>Achieved high student satisfaction ratings.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={cognimetrics}
            alt="Cognimetrics"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Psychopedia</strong> - Psychometrics Wiki
            <p className="text-gray-400 text-sm">Dec 2022 - Present</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Built and maintained a web application for psychometric analysis.</li>
              <li>Collaborated with a cross-functional team to design UI/UX features.</li>
              <li>Optimized codebase to enhance application performance.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={IRE}
            alt="Indian River Estates"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">BetterJS</strong> - Javascript Library
            <p className="text-gray-400 text-sm">Aug 2021 - Aug 2022</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Prepared high-quality meals for residents.</li>
              <li>Maintained a clean and efficient kitchen environment.</li>
              <li>Collaborated with team members to meet service deadlines.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={IRE}
            alt="Indian River Estates"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Psychometric</strong> - Psychometrics Library
            <p className="text-gray-400 text-sm">Aug 2021 - Aug 2022</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Prepared high-quality meals for residents.</li>
              <li>Maintained a clean and efficient kitchen environment.</li>
              <li>Collaborated with team members to meet service deadlines.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
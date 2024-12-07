import cognimetrics from "../assets/cognimetrics.png";
import TutorCom from "../assets/TutorCom.jpg";
import IRE from "../assets/IRE.png";
import Better from "../assets/Better.png"

export default function Projects() {
  return (
    <div className="bg-gray-950 rounded-lg p-6 mt-4 border-2 border-gray-500 relative max-h-[30rem] overflow-y-auto hide-scrollbar">
      {/* Vertical Line */}
      <div className="absolute top-0 left-[56px] h-full w-[0.5px] bg-gray-400"></div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 relative">
          <img
            src={cognimetrics}
            alt="Cognimetrics"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Psychopedia</strong> - Psychometrics Wiki
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Psychometrics wiki designed for education purposes.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={cognimetrics}
            alt="Indian River Estates"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Psychometric</strong> - Psychometrics Library
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>NPM library designed for use by Psychometricians, Psychologists, and others.</li>
              <li>In-builds various Psychometric formulae, thus streamlining a user's goals.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={Better}
            alt="Indian River Estates"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">BetterJS</strong> - Javascript Library
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>NPM library supporting Javascript's existing prototypes.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
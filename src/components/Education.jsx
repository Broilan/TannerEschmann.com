import IRSC from "../assets/IRSC.jpg";
import GA from "../assets/GA.png";

export default function Education() {
  return (
    <div className="bg-gray-950 rounded-lg p-6 mt-4 relative border-2 border-gray-400">
      {/* Vertical Line */}
      <div className="absolute top-0 left-[56px] h-full w-[0.5px] bg-gray-400"></div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 relative">
          <img
            src={IRSC}
            alt="Indian River State College"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">Indian River State College</strong>
            <p className="text-sm">Associate of Arts in Engineering</p>
            <p className="text-gray-400 text-sm">2021 - 2025</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Gained foundational knowledge in engineering principles.</li>
              <li>Participated in collaborative team projects.</li>
              <li>Achieved Dean's List recognition for academic excellence.</li>
            </ul>
          </div>
        </li>
        <li className="flex items-center space-x-4 relative">
          <img
            src={GA}
            alt="General Assembly"
            className="w-16 h-16 rounded-full border-2 border-gray-500 relative z-10"
          />
          <div>
            <strong className="text-lg">General Assembly</strong>
            <p className="text-sm">Software Engineering Program</p>
            <p className="text-gray-400 text-sm">May 2022 - Dec 2022</p>
            <ul className="text-gray-300 text-sm list-disc ml-6">
              <li>Learned full-stack software engineering concepts.</li>
              <li>Built and deployed multiple capstone projects.</li>
              <li>Collaborated in agile teams to develop applications.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

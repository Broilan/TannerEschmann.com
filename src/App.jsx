import React, { useState } from "react";
import { Education, InfoCard, Toggle, Work, Projects, Tools } from "./components";

function App() {
  const [selectedSection, setSelectedSection] = useState("Work");

  
  return (
    <div className="w-screen h-screen bg-gray-950 text-white flex flex-col items-center relative overflow-y-auto hide-scrollbar">
      {/* Content */}
      <div className="relative w-half max-w-4xl px-4 py-10">
        {/* Info Card */}
        <InfoCard />

        {/* Toggle Tabs */}
        <Toggle
          options={["Work", "Education", "Projects", "Tools"]}
          selected={selectedSection}
          onChange={setSelectedSection}
        />

        {/* Conditional Rendering */}
        <div>
          {selectedSection === "Work" && <Work />}
          {selectedSection === "Education" && <Education />}
          {selectedSection === "Projects" && <Projects />}
          {selectedSection === "Tools" && <Tools />}
        </div>
      </div>
    </div>
  );
}

export default App;
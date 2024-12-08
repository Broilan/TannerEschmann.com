import React, { useState } from "react";
import { InfoCard, Toggle, ListSection } from "./components";
import { workData, educationData, projectsData } from "./data";

function App() {
  const [selectedSection, setSelectedSection] = useState("Work");

  return (
    <div className="w-screen h-screen bg-gray-950 text-white overflow-y-auto hide-scrollbar">
      {/* This container will hold everything centered */}
      {/* At desktop (≥1024px): width is 1/3, centered. Below that, full width. */}
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="w-full lg:w-1/3 mx-auto px-4 py-10 flex flex-col space-y-4">
          <InfoCard />

          <Toggle
            options={["Work", "Education", "Projects"]}
            selected={selectedSection}
            onChange={setSelectedSection}
          />

          {selectedSection === "Work" && <ListSection data={workData} />}
          {selectedSection === "Education" && <ListSection data={educationData} />}
          {selectedSection === "Projects" && <ListSection data={projectsData} />}
        </div>
      </div>
    </div>
  );
}

export default App;

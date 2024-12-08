import React, { useState } from "react";
import { InfoCard, Toggle, ListSection } from "./components";
import { workData, educationData, projectsData } from "./data";


function App() {
  const [selectedSection, setSelectedSection] = useState("Work");

  
  return (
    
    <div className="w-screen h-screen bg-gray-950 text-white flex flex-col items-center relative overflow-y-auto hide-scrollbar">
      
      {/* Content */}


      <div className="relative max-w-2xl px-4 py-10">
        {/* Info Card */}
        <InfoCard />

        {/* Toggle Tabs */}
        <Toggle
          options={["Work", "Education", "Projects"]}
          selected={selectedSection}
          onChange={setSelectedSection}
        />

        {/* Conditional Rendering */}
        <div>
          {selectedSection === "Work" && <ListSection data={workData} />}
          {selectedSection === "Education" && <ListSection data={educationData} />}
          {selectedSection === "Projects" && <ListSection data={projectsData} />}
        </div>
      </div>

      {/* <h1>Recent Posts</h1> */}
    </div>
  );
}

export default App;
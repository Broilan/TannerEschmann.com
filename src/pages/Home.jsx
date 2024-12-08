import React, { useState } from "react";
import { InfoCard, Toggle, ListSection } from "../components";
import { workData, educationData, projectsData } from "../data";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("Work");

  return (
    <>
      <InfoCard />
      <Toggle
        options={["Work", "Education", "Projects"]}
        selected={selectedSection}
        onChange={setSelectedSection}
      />
      {selectedSection === "Work" && <ListSection data={workData} />}
      {selectedSection === "Education" && <ListSection data={educationData} />}
      {selectedSection === "Projects" && <ListSection data={projectsData} />}
    </>
  );
}

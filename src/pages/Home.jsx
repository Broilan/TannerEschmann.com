import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { InfoCard, Toggle, ListSection } from "../components";
import { workData, educationData, projectsData } from "../data";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("Work");

  return (
    <>
      <Helmet>
        <title>Home | Tanner Eschmann</title>
        <meta
          name="description"
          content="Welcome to Tanner Eschmann's portfolio. Discover my work experience, education, and projects."
        />
      </Helmet>
      <header>
        <InfoCard />
      </header>
      <section aria-labelledby="sections-title">
        <h2 id="sections-title" className="sr-only">Sections</h2>
        <Toggle
          options={["Work", "Education", "Projects"]}
          selected={selectedSection}
          onChange={setSelectedSection}
        />
        {selectedSection === "Work" && <ListSection data={workData} />}
        {selectedSection === "Education" && <ListSection data={educationData} />}
        {selectedSection === "Projects" && <ListSection data={projectsData} />}
      </section>
    </>
  );
}

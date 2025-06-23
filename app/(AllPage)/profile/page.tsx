"use client";
import { useState } from "react";
import SidbarProfile from "@/app/Components/SidbarProfile";
import HeadProfile from "@/app/Components/HeadProfile";
import EducationInfo from "@/app/Components/EducationInfo";
import TuitionInfo from "@/app/Components/TuitionInfo";
import PersonalInfo from "@/app/Components/PersonalInfo";
const profile = () => {
  const [activeSection, setActiveSection] = useState("education");
  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between">
        <div className="w-1/4">
          <SidbarProfile />
        </div>

        <div className="w-3/4">
          <HeadProfile
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          {activeSection === "education" && <EducationInfo />}
          {activeSection === "tuition" && <TuitionInfo />}
          {activeSection === "personal" && <PersonalInfo />}
        </div>
      </div>
    </div>
  );
};

export default profile;

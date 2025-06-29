"use client";

import { GiPathDistance } from "react-icons/gi";

const TutionsData = [
  {
    distance: "05 km",
    id: "3456",
    title: "Tutor Needed For English Version",
    tuitionType: "Online Tuition",
    medium: "English,Bangla",
    class: "6-10",
    gendar: "Male",
    tutorEducation: "HSC/BSC",
    subject: "English,Math,Science",
    Sallary: "5000 BDT/Month",
    expertise: "02 years",
    icon: <GiPathDistance className="text-xl mx-auto" />,
    postedAt: "April 10, 2025",
  },
  {
    distance: "05 km",
    id: "3456",
    title: "Tutor Needed For English Version",
    tuitionType: "Online Tuition",
    medium: "English,Bangla",
    class: "6-10",
    gendar: "Male",
    tutorEducation: "HSC/BSC",
    subject: "English,Math,Science",
    Sallary: "5000 BDT/Month",
    expertise: "02 years",
    icon: <GiPathDistance className="text-xl mx-auto" />,
    postedAt: "April 10, 2025",
  },
  {
    distance: "05 km",
    id: "3456",
    title: "Tutor Needed For English Version",
    tuitionType: "Online Tuition",
    medium: "English,Bangla",
    class: "6-10",
    gendar: "Male",
    tutorEducation: "HSC/BSC",
    subject: "English,Math,Science",
    Sallary: "5000 BDT/Month",
    expertise: "02 years",
    icon: <GiPathDistance className="text-xl mx-auto" />,
    postedAt: "April 10, 2025",
  },
  {
    distance: "05 km",
    id: "3456",
    title: "Tutor Needed For English Version",
    tuitionType: "Online Tuition",
    medium: "English,Bangla",
    class: "6-10",
    gendar: "Male",
    tutorEducation: "HSC/BSC",
    subject: "English,Math,Science",
    Sallary: "5000 BDT/Month",
    expertise: "02 years",
    icon: <GiPathDistance className="text-xl mx-auto" />,
    postedAt: "April 10, 2025",
  },
];

const TutionsCard = () => {
  return (
    <div className=" mt-10 flex flex-col gap-5">
      {TutionsData.map((tution, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-xl border border-quaternary4 rounded-lg transition-transform transform hover:scale-105"
        >
          <div className="card-body ">
            <div className="flex justify-between ">
              <div className="flex items-center justify-center ">
                <span>{tution.icon}</span>
                <span className="ml-2 font-DMSans font-normal text-base text-primary1">
                  {tution.distance}
                </span>
              </div>
              <div>
                <p className="font-DMSans font-normal text-base text-secondary2 bg-primary1 border-2 border-quaternary4 px-4 py-1 rounded-lg">
                  <span className="font-semibold mr-1">ID:</span>
                  {tution.id}
                </p>
              </div>
            </div>
            <h2 className="card-title font-DMSans font-bold text-2xl mt-5">
              {tution.title}
            </h2>
            <div className="flex gap-8  px-5 my-5">
              <div className="border px-4 py-2 rounded-lg bg-black text-secondary2">
                <p className="font-DMSans font-normal text-base ">
                  {tution.tuitionType}
                </p>
              </div>
              <div className="border px-4 py-2 rounded-lg bg-black text-secondary2">
                <p className="font-DMSans font-normal text-base ">
                  <span className="font-semibold mr-1">Expertise:</span>
                  {tution.expertise}
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  px-5 mt-2">
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Medium:</span>
                {tution.medium}
              </p>
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Class:</span>
                {tution.class}
              </p>
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Gendar:</span>
                {tution.gendar}
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 mt-2">
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Tutor Education:</span>
                {tution.tutorEducation}
              </p>
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Subject:</span>
                {tution.subject}
              </p>
              <p className="font-DMSans font-normal text-base text-tertiary3">
                <span className="font-semibold mr-1">Sallary:</span>
                {tution.Sallary}
              </p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center px-5 mt-4"></div>
          <div className="card-actions justify-between mx-5 my-2">
            <p className="font-DMSans font-normal text-base text-tertiary3">
              <span className="font-semibold mr-1">Posted At:</span>
              {tution.postedAt}
            </p>
            <button className="btn btn-primary1 text-secondary2 bg-primary1 font-DMSans font-semibold text-base">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutionsCard;

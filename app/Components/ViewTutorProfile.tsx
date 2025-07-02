import TimeSlotSelector from "./TimeSlotSelector";

const tuitionData = [
  {
    title: "Tuition-info",
    subjects: "English, Bangla, Math",
    medium: "Bangla, English",
    tuitionStyle: "Ofline, Online",
    experience: "02 years ",
    status: "Ofline, Home visit",
    gander: "Any",
    class: " 6-10",
    salary: "3000-6500 BDT/Month",
  },
];
const educationDtaa = [
  {
    subtitle: "Diploma In Engineering",
    institution: "Cox's Bazar Polytehnic Institution",
    dep: "Computer Science ",
    PassingYear: "2024",
    Result: " 3.34 (out of 4.00)",
  },
  {
    subtitle: "Diploma In Engineering",
    institution: "Cox's Bazar Polytehnic Institution",
    dep: "Computer Science ",
    PassingYear: "2024",
    Result: " 3.34 (out of 4.00)",
  },
];
const ViewTutorProfile = () => {
  return (
    <div>
      {tuitionData.map((item) => (
        <div className="mb-12">
          <h1 className="text-2xl font-DMSans font-bold text-primary1 mb-10 border-b border-quaternary4">
            {item.title}
          </h1>
          <div className=" flex items-center justify-center mb-5 ">
            <TimeSlotSelector />
          </div>
          <div>
            <table className=" leading-8 flex justify-between">
              <tbody>
                <tr>
                  <td className=" font-semibold font-Roboto text-lg pr-4">
                    subjects
                  </td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.subjects}
                  </td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg">
                    {" "}
                    Medium
                  </td>
                  <td className="text-gray-700 font-popins "> {item.medium}</td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg">
                    {" "}
                    Status
                  </td>
                  <td className="text-gray-700 font-popins "> {item.status}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg pr-4">
                    {" "}
                    Preferred Classes{" "}
                  </td>
                  <td className="text-gray-700 font-popins "> {item.class}</td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg ">
                    {" "}
                    Tuition Style
                  </td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.tuitionStyle}
                  </td>
                </tr>

                <tr>
                  <td className=" font-semibold font-Roboto  text-lg">
                    {" "}
                    Minimum Salary{" "}
                  </td>
                  <td className="text-gray-700 font-popins "> {item.salary}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div>
        <h1 className="text-2xl font-DMSans font-bold text-primary1 mb-10 border-b border-quaternary4">
          Educational Qualification
        </h1>

        {educationDtaa.map((item) => (
          <div className=" mb-5">
            <h2 className="font-DMSans font-semibold text-lg">
              {item.subtitle}
            </h2>
            <tbody className="p-4 block border border-quaternary4 ">
              <tr>
                <td className=" font-semibold font-Roboto text-tertiary3  text-base ">
                  Institution
                </td>
                <td className="text-gray-700 font-popins ">
                  {" "}
                  {item.institution}
                </td>
              </tr>
              <tr>
                <td className=" font-semibold font-Roboto  text-base text-tertiary3 ">
                  {" "}
                  Group/Dep
                </td>
                <td className="text-gray-700 font-popins "> {item.dep}</td>
              </tr>
              <tr>
                <td className=" font-semibold font-Roboto text-tertiary3  text-base pr-10">
                  Passing Year
                </td>
                <td className="text-gray-700 font-popins ">
                  {" "}
                  {item.PassingYear}
                </td>
              </tr>
              <tr>
                <td className=" font-semibold font-Roboto  text-tertiary3 text-base"> Result</td>
                <td className="text-gray-700 font-popins "> {item.Result}</td>
              </tr>
            </tbody>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTutorProfile;

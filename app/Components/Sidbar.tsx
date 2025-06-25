import TimeSlotSelector from "./TimeSlotSelector";

const Sidbar = () => {
  return (
    <div className=" w-64    bg-white   ">
      <h1 className=" font-DMSans font-bold text-primary1 text-2xl mt-5 px-2 border-b mb-12">
        Advance Filter
      </h1>

      <div className=" mb-10">
        <h3 className=" font-DMSans font-semibold text-base">Search post ID</h3>
        <input
          type="text"
          placeholder=" Enter post id"
          className=" py-1 px-2 border-2 border-dashed border-quaternary4 outline-0 w-full"
        />
      </div>
      <div className=" mb-10 ">
        <h3 className=" font-DMSans font-semibold text-base mb-1">
          Search By Schedule
        </h3>
        <div className=" p-2">
          <TimeSlotSelector />
        </div>
      </div>
      <div className=" mb-20 ">
        <h3 className=" font-DMSans font-semibold text-base mb-5 border-b border-quaternary4">Fee Range</h3>
        <div className="relative ">
          <input
            type="range"
            min={1}
            max={100}
            className="range  range-neutral"
          />

          <p className=" border-2 border-quaternary4 py-1 px-5 absolute top-8 left-0">
            1000 tk
          </p>
          <p className=" border-2 border-quaternary4 py-1 px-5 absolute top-8 right-0">
            5000 tk
          </p>
        </div>
      </div>
      <div className=" mt-14">
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
          <legend className="fieldset-legend font-DMSans font-semibold text-base">
            Tutor Preference
          </legend>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text">Any</span>
          </label>
          <label className="label">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Male</span>
          </label>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text">Female</span>
          </label>
        </fieldset>
      </div>
      <div className=" my-5">
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
          <legend className="fieldset-legend font-DMSans font-semibold text-base">
            Tuition Type
          </legend>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text">All Tuition</span>
          </label>
          <label className="label">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Online Tuition</span>
          </label>
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text">Home Tuition</span>
          </label>
        </fieldset>
      </div>
      <div className=" mb-10 ">
        <h3 className=" font-DMSans font-semibold text-base mb-5 border-b border-quaternary4  ">Nearby</h3>
        <div className="relative ">
          <input
            type="range"
            min={1}
            max={100}
            className="range  range-neutral"
          />

         
          <p className=" border-2 border-quaternary4 py-1 px-5 absolute top-8 right-0">
          05 km
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;

"use client";
import { useState } from "react";

const days = ["Bangla", "English", "Hindi", "Other", ];
const SelectTag = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDayToggle = (day: string) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updated);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => handleDayToggle(day)}
            className={`py-2 px-5  rounded text-xs font-bold transition-colors ${
              selectedDays.includes(day)
                ? "bg-primary1 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectTag;

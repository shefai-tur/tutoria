"use client";
import { useState } from "react";

const days = ["SA", "SU", "MO", "TU", "WE", "TH", "FR"];

type TimeSlotSelectorProps = {
  value?: {
    start: string;
    end: string;
    days: string[];
  };
  onChange?: (slot: { start: string; end: string; days: string[] }) => void;
};

const TimeSlotSelector = ({ value, onChange }: TimeSlotSelectorProps) => {
  const [start, setStart] = useState(value?.start || "20:00");
  const [end, setEnd] = useState(value?.end || "21:00");
  const [selectedDays, setSelectedDays] = useState<string[]>(value?.days || []);

  const handleDayToggle = (day: string) => {
    const updated =
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day];
    setSelectedDays(updated);
    onChange?.({ start, end, days: updated });
  };

  const handleTimeChange = (type: "start" | "end", val: string) => {
    if (type === "start") setStart(val);
    else setEnd(val);
    onChange?.({
      start: type === "start" ? val : start,
      end: type === "end" ? val : end,
      days: selectedDays,
    });
  };

  // Helper to format time for display (e.g., 20:00 -> 8:00 PM)
  const formatTime = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const hour = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className="inline-flex flex-col items-center bg-gray-100 rounded-md px-2 py-1">
      <div className="flex items-center gap-2 mb-1">
        <input
          type="time"
          value={start}
          onChange={(e) => handleTimeChange("start", e.target.value)}
          className="w-20 px-1 py-0.5 rounded border border-gray-300 text-sm"
        />
        <span className="text-xs font-semibold">TO</span>
        <input
          type="time"
          value={end}
          onChange={(e) => handleTimeChange("end", e.target.value)}
          className="w-20 px-1 py-0.5 rounded border border-gray-300 text-sm"
        />
      </div>
      <div className="flex gap-1">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => handleDayToggle(day)}
            className={`w-7 h-7 rounded text-xs font-bold transition-colors ${
              selectedDays.includes(day)
                ? "bg-primary1 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {formatTime(start)} to {formatTime(end)}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
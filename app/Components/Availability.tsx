"use client";
import { useState } from "react";
import TimeSlotSelector from "./TimeSlotSelector";
import { MdAddBox, MdRemove } from "react-icons/md";

export  type Slot = { start: string; end: string; days: string[] };

export default function Availability({slots, setSlots}: {slots: Slot[], setSlots: (slots: Slot[]) => void}) {
 

  const updateSlot = (i: number, next: Slot) =>
    setSlots(slots.map((s, idx) => (idx === i ? next : s)));

  const addSlot = () =>
    setSlots([...slots, { start: "20:00", end: "21:00", days: [] }]);

  const removeSlot = (i: number) =>
    setSlots(slots.filter((_, idx) => idx !== i));

 


  return (
    <div className="space-y-3">
      {slots.map((slot, i) => (
        <div key={i} className="flex items-center gap-2">
          <TimeSlotSelector value={slot} onChange={(s) => updateSlot(i, s)} />
          <button type="button" onClick={() => removeSlot(i)} className="text-sm text-red-600">
            <p className="text-xl mx-auto rounded bg-red-200 px-2 py-1"><MdRemove /></p>
          </button>
        </div>
      ))}
      <div className="flex gap-2">
        <button type="button" onClick={addSlot} className="rounded bg-gray-200 px-2 py-1">
          <p className="text-xl mx-auto"><MdAddBox/></p>
        </button>
      </div>
    </div>
  );
}
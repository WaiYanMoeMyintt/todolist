import React from "react";
import { Trash, Pencil } from "lucide-react";
const TopicList = () => {
  return (
    <div className="bg-slate-800 shadow-md mt-4 py-4 px-6 rounded-xl flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h2>Learn a new skill</h2>
        <p className="text-sm text-slate-300 ml-1">React or Python.</p>
      </div>
      <div className="flex  gap-3">
        <div className="p-2 rounded-full hover:bg-slate-700  transition-opacity">
          <Trash className="cursor-pointer  " size={18} />
        </div>
        <div>
          <div className="p-2 rounded-full hover:bg-slate-700  transition-opacity">
            <Pencil className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicList;

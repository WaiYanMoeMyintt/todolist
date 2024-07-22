"use client";
import React, { useEffect, useState } from "react";
import { Trash, Pencil } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { get } from "mongoose";
const TopicList = ({title,description}) => {
  return (
    <div className="bg-slate-800 shadow-md mt-4 py-4 px-6 rounded-xl flex justify-between items-center">
      <div className = "flex gap-2.5 bg-slate-800 flex-col">
        <h2>{title}</h2>
        <p className="text-sm text-slate-300 ml-1">{description}</p>
      </div>
      <div className="flex  gap-3">
        <div className="p-2 rounded-full hover:bg-slate-700  transition-opacity">
          <Trash className="cursor-pointer  " size={18} />
        </div>
        <Link href="/editTopic">
          <div className="p-2 rounded-full hover:bg-slate-700  transition-opacity">
            <Pencil className="cursor-pointer" size={18} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopicList;

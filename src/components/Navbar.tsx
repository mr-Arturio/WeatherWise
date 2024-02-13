import React from "react";
import { MdSunny, MdMyLocation, MdLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";
import { useState } from "react";
import axios from "axios";

type Props = { location?: string };

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Navbar({}: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-blue-200/80">
      <div className="h-[80px] w-full flex justify-between items-center max-w-screen-2xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl font-bold">Weather App</h2>
          <MdSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm"> Canada </p>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}

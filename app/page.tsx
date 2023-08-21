"use client";

import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();
    console.log(result);
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions />
    </div>
  );
}

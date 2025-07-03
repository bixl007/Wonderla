"use client";

import { useState, useRef, useEffect } from "react";
import { ridesData } from "@/data";
import CategorySidebar from "./CategorySidebar";
import RideCard from "./RideCard";
import CarouselControls from "./CarouselControls";

const RidesPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState("Land");
  const [filteredRides, setFilteredRides] = useState(ridesData.Land);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // @ts-expect-error - ignore
    setFilteredRides(ridesData[category]);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < filteredRides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.children[0].clientWidth * 1.15;
      carouselRef.current.scrollTo({
        left: currentIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < filteredRides.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredRides]);

  return (
    <section className="bg-[#22304A] text-white py-8 md:py-16 pt-16 md:pt-32 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start ">
          <CategorySidebar
            onSelectCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <div className="flex flex-col">
            <div className="flex w-[55vw] items-center justify-between mb-6">
              <h2 className="text-6xl font-extrabold">OUR ICONIC RIDES</h2>
              <CarouselControls onPrev={handlePrev} onNext={handleNext} />
            </div>
            <div className="w-full lg:w-[100vw] overflow-hidden">
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-hidden scrollbar-hide"
              >
                {filteredRides.map((ride, index) => (
                  <RideCard key={index} ride={ride} />
                ))}
              </div>
              <div className=" mt-8">
                <button className="bg-yellow-400 text-[#3d55d1] font-bold py-3 px-15 text-xs rounded-full hover:bg-yellow-500 transition-colors">
                  Explore All Rides!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RidesPreview;

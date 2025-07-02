"use client";
import { useState } from "react";
import { ParkDropdown, ResortDropdown } from "./Dropdown";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Navbar = () => {
  const [isParkOpen, setParkOpen] = useState(false);
  const [isResortOpen, setResortOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const parkItems = [
    {
      name: "KOCHI",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp?w=96&q=75",
    },
    {
      name: "BENGALURU",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=96&q=75",
    },
    {
      name: "HYDERABAD",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=96&q=75",
    },
    {
      name: "BHUBANESWAR",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=96&q=75",
    },
  ];

  const resortItems = [
    {
      name: "RESORT",
      image: "https://www.wonderla.com/images/bangalore-resort2.png?w=96&q=75",
    },
    {
      name: "THE ISLE",
      image: "https://www.wonderla.com/images/isle-resort.png?w=96&q=75",
      isNew: true,
    },
  ];
  return (
    <div className=" fixed top-8 w-screen">
      <div className="flex justify-between items-center py-3 px-6 bg-white shadow-md rounded-xl mx-auto max-w-[95%] my-3">
        <div>
          <Image
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75"
            alt="logo"
            width={128}
            height={40}
            className="h-10 transition-all duration-300 hover:scale-105 transform"
          />
        </div>
        <div className="hidden lg:flex space-x-8 items-center">
          <div
            className="relative"
            onMouseEnter={() => setParkOpen(true)}
            onMouseLeave={() => setParkOpen(false)}
          >
            <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M12 21C15.5 17.4 19 14 19 10.5C19 7.5 16 5 12.5 5C9 5 6 7.5 6 10.5C6 14 9.5 17.4 13 21"
                />
                <circle
                  cx="12.5"
                  cy="10.5"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>PARK</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`transition-transform duration-300 ${
                  isParkOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isParkOpen && <ParkDropdown items={parkItems} />}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setResortOpen(true)}
            onMouseLeave={() => setResortOpen(false)}
          >
            <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.5"
                className="text-gray-500"
              >
                <path
                  d="M9.00002 16.2C9.00002 16.2 14.6348 11.1913 14.6348 7.43477C14.6348 4.32277 12.112 1.79999 9.00002 1.79999C5.88801 1.79999 3.36523 4.32277 3.36523 7.43477C3.36523 11.1913 9.00002 16.2 9.00002 16.2Z"
                  stroke="#717D92"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M10.8002 7.2001C10.8002 8.19421 9.99436 9.0001 9.00025 9.0001C8.00613 9.0001 7.20025 8.19421 7.20025 7.2001C7.20025 6.20599 8.00613 5.4001 9.00025 5.4001C9.99436 5.4001 10.8002 6.20599 10.8002 7.2001Z"
                  stroke="#717D92"
                  strokeWidth="1.5"
                ></path>
              </svg>
              <span>RESORTS</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`transition-transform duration-300 ${
                  isResortOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isResortOpen && (
              <ResortDropdown items={resortItems} title="Bengaluru" />
            )}
          </div>

          <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
            <Image
              src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75"
              alt="icon"
              className="w-4 h-4"
              width={16}
              height={16}
              style={{
                color: "transparent",
                filter:
                  "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
              }}
            />
            <span>OFFERS</span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
            <Image
              src="https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75"
              className="w-4 h-4"
              width={16}
              height={16}
              style={{
                color: "transparent",
                filter:
                  "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
              }}
              alt="icon"
            />
            <span>RIDES</span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
            <Image
              src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75"
              alt="logo"
              className="w-4 h-4"
              width={16}
              height={16}
              style={{
                color: "transparent",
                filter:
                  "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
              }}
            />
            <span>RESTAURANTS</span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer font-bold text-gray-500 text-sm ">
            <Image
              src="https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75"
              className="w-4 h-4"
              width={16}
              height={16}
              style={{
                color: "transparent",
                filter:
                  "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
              }}
              alt="icon"
            />
            <span>EVENTS</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#334DCF] text-sm font-extrabold py-2 px-4 rounded-md flex items-center transition-all duration-300 hover:scale-105 transform">
            BOOK TICKETS
            <svg
              width="20"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
              className="pl-2"
            >
              <path
                d="M7.1.04a2.119 2.119 0 0 0-.628.304C6.267.493.834 4.765.683 4.896a1.983 1.983 0 0 0-.409.504c-.253.467-.221 1.028.085 1.49.109.164.847 1.108.867 1.109.01.001.113-.074.23-.167.118-.092.264-.193.324-.225.1-.052.129-.057.31-.057.255 0 .364.044.515.209.141.153.183.271.171.487a.69.69 0 0 1-.186.46 8.735 8.735 0 0 1-.487.406c-.015.011.79 1.022.906 1.139.306.307.651.456 1.051.453.327-.003.644-.115.949-.335.162-.116 5.52-4.328 5.759-4.527.286-.237.5-.56.586-.882a1.455 1.455 0 0 0-.023-.72 1.867 1.867 0 0 0-.277-.54c-.176-.237-.781-1-.792-.999-.007 0-.102.072-.212.159-.11.088-.254.189-.32.225-.114.062-.131.065-.33.065-.189 0-.221-.006-.323-.056a.672.672 0 0 1-.357-.727c.05-.241.124-.341.434-.588l.244-.194-.391-.497C8.576.539 8.449.399 8.27.271a1.24 1.24 0 0 0-.78-.263A1.103 1.103 0 0 0 7.1.04M5.708 1.952c.101.132.17.238.16.248-.01.009-.184.148-.388.309l-.37.292-.074-.082a4.646 4.646 0 0 1-.188-.231c-.099-.129-.111-.154-.086-.177.049-.048.747-.591.758-.59.005.001.09.105.188.231m1.1 1.407c.095.12.172.227.172.238 0 .011-.172.155-.383.32l-.384.3-.178-.227a2.865 2.865 0 0 1-.177-.239c.001-.015.746-.607.765-.61.007 0 .09.097.185.218M7.927 4.78c.095.121.173.227.172.235-.001.019-.751.605-.773.604-.013-.001-.163-.185-.332-.409l-.035-.047.382-.302c.21-.165.389-.301.397-.301.008 0 .093.099.189.22m1.11 1.409c.101.125.183.233.183.238 0 .013-.737.593-.768.605-.036.014-.388-.442-.362-.469.012-.011.757-.6.762-.602.001-.001.085.102.185.228"
                fill="#334DCF"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="#3D55D1"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M3 6H21"
                stroke="#3D55D1"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M3 18H21"
                stroke="#3D55D1"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;

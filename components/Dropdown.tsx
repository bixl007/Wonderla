'use client';
import React from "react";
import Image from "next/image";

type Item = {
  image: string;
  name: string;
  isNew?: boolean;
};

const DropdownItem = ({ image, name, isNew }: Item) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
    <Image
      src={image}
      alt={name}
      className="w-10 h-10 rounded-md"
      width={40}
      height={40}
    />
    <span className="font-semibold text-gray-700">{name}</span>
    {isNew && (
      <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-md">
        NEW
      </span>
    )}
  </div>
);

type DropdownProps = {
  items: Item[];
  title?: string;
};

export const ParkDropdown = ({ items }: DropdownProps) => (
  <div className="absolute top-full w-64 bg-white rounded-xl shadow-lg p-4 z-10">
    {items.map((item) => (
      <DropdownItem key={item.name} {...item} />
    ))}
  </div>
);

export const ResortDropdown = ({ items, title }: DropdownProps) => (
  <div className="absolute top-full w-64 bg-white rounded-xl shadow-lg p-4 z-10">
    <div className="flex items-center space-x-2 mb-3">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          stroke="#334DCF"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M12 21C15.5 17.4 19 14 19 10.5C19 7.5 16 5 12.5 5C9 5 6 7.5 6 10.5C6 14 9.5 17.4 13 21"
        />
        <circle cx="12.5" cy="10.5" r="2.5" stroke="#334DCF" strokeWidth="1.5" />
      </svg>
      <span className="font-semibold text-gray-700">{title}</span>
    </div>
    {items.map((item) => (
      <DropdownItem key={item.name} {...item} />
    ))}
  </div>
);

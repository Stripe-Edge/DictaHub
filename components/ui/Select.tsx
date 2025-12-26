"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Select({
  label,
  options,
  placeholder = "Select an option",
  value = "",
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (optionValue: string) => {
    setSelected(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === selected)?.label;

  return (
    <div>
      <label className="mb-2 text-gray-800 font-semibold block">{label}</label>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 font-medium focus:border-[#00c896] focus:ring-2 focus:ring-[#00c896]/20 outline-none transition-all hover:border-gray-400 items-center justify-between cursor-pointer"
        >
          <span className={selectedLabel ? "text-gray-900" : "text-gray-500"}>
            {selectedLabel || placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-50">
            {options.map((option) => (
              <button
                type="button"
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-all first:rounded-t-xl last:rounded-b-xl ${
                  selected === option.value
                    ? "bg-[#00c896] text-white"
                    : "text-gray-900 hover:bg-[#f0f9f6] hover:text-[#00c896]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

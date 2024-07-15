import { MoveUpRight } from "lucide-react";

import { Separator } from "./seperator";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { Chart } from "./chart";

interface CardProps {
  name: string;
  imageSrc: string;
  live: number[];
  monitored: number[];
  total: number | undefined;
  liveTotal: number | undefined;
  monitorTotal: number | undefined;
  ips: number | undefined;
  ports: number | undefined;
  vulns: number | undefined;
  color: "orange" | "yellow" | "purple";
  filteredBy: string[];
  setFilteredBy: (value: string[]) => void;
  type: string;
}

export const Card = ({
  name,
  imageSrc,
  live,
  monitored,
  total,
  liveTotal,
  monitorTotal,
  ips,
  ports,
  vulns,
  color,
  filteredBy,
  setFilteredBy,
  type,
}: CardProps) => {
  const isActive = filteredBy.includes(type);

  const handleClick = (value: string) => {
    if (filteredBy.includes(value)) {
      const newFilteredBy = filteredBy.filter((v) => v !== value);
      setFilteredBy(newFilteredBy);
    } else {
      const newFilteredBy = [...filteredBy, value];
      setFilteredBy(newFilteredBy);
    }
  };

  const liveData = live
    ? live.map((v) => ({ name: "Live", value: v }))
    : [
        { name: "Live", value: 5 },
        { name: "Live", value: 10 },
        { name: "Live", value: 20 },
        { name: "Live", value: 14 },
        { name: "Live", value: 30 },
        { name: "Live", value: 60 },
        { name: "Live", value: 10 },
      ];

  const monitoredData = monitored
    ? monitored.map((v) => ({ name: "Monitored", value: v }))
    : [
        { name: "Monitored", value: 5 },
        { name: "Monitored", value: 10 },
        { name: "Monitored", value: 20 },
        { name: "Monitored", value: 14 },
        { name: "Monitored", value: 30 },
        { name: "Monitored", value: 60 },
        { name: "Monitored", value: 10 },
      ];

  return (
    <button
      onClick={() => handleClick(type)}
      className={cn(
        "relative bg-[#1D2229] xl:hover:bg-[#252b32] shadow-sm shadow-gray-600 px-4 py-5 rounded-lg space-y-4 transition-colors ease-linear",
        isActive && "bg-[#252b32]"
      )}
    >
      <div className="flex justify-between items-start mb-10">
        <div
          className={cn(
            "w-16 rounded-lg overflow-hidden",
            color === "orange" && "bg-orange-600/90",
            color === "purple" && "bg-[#565392]",
            color === "yellow" && "bg-[#D1B003]"
          )}
        >
          <img src={imageSrc} className="object-cover w-3/4 h-3/4 mx-auto" />
          <p className="bg-white w-full text-center font-bold">{total}</p>
        </div>
        <MoveUpRight className="text-white" />
      </div>

      <div className="space-y-2">
        <h1 className="font-bold text-white text-start">{name}</h1>
        <Separator />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center ">
            <span className="text-white text-start font-bold">
              <h3 className="text-sm">Live</h3>
              <p className="text-xl">{liveTotal}</p>
            </span>
            <Chart data={liveData} />
          </div>
          <div className="flex justify-between items-center ">
            <span className="text-white text-start font-bold">
              <h3 className="text-sm">Monitored</h3>
              <p className="text-xl">{monitorTotal}</p>
            </span>
            <Chart data={monitoredData} />
          </div>
        </div>
        <Separator />
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="flex items-start justify-center gap-2">
          <div className="bg-[#327794] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src="/src/assets/globe.svg" className="object-cover h-9 w-9" />
          </div>
          <div className="text-white text-start font-bold">
            <h3 className="text-sm">IPs</h3>
            <p className="text-">{ips}</p>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2">
          <div className="bg-[#327794] w-12 h-12 rounded-lg flex items-center justify-center">
            <img
              src="/src/assets/conflict.svg"
              className="object-cover h-9 w-9"
            />
          </div>
          <div className="text-white text-start font-bold">
            <h3 className="text-sm">Ports</h3>
            <p className="text-">{ports}</p>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2">
          <div className="bg-[#327794] w-12 h-12 rounded-lg flex items-center justify-center">
            <img src="/src/assets/bug.svg" className="object-cover h-9 w-9" />
          </div>
          <div className="text-white text-start font-bold">
            <h3 className="text-sm">Vulns</h3>
            <p className="text-">{vulns}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export const CardSkeleton = () => (
  <Skeleton className="relative w-[350px] shadow-sm shadow-gray-600 px-4 py-5 rounded-lg space-y-4 transition-colors ease-linear">
    <div className="flex justify-between items-start mb-10">
      <Skeleton className="w-20 h-14 rounded-lg" />
      <Skeleton className="w-8 h-8 rounded-lg" />
    </div>

    <div className="space-y-2">
      <Skeleton className="w-20 h-6 " />
      <Separator />
    </div>

    <div className="space-y-2">
      <Skeleton className="flex justify-between items-center px-2 w-full h-24">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex justify-between items-center gap-5">
            <span className="text-white text-start font-bold space-y-5">
              <Skeleton className="w-10 h-7" />
              <Skeleton className="w-20 h-7" />
            </span>
            <Skeleton className="h-11 w-11" />
          </div>
        ))}
      </Skeleton>
      <Separator />
    </div>

    <Skeleton className="flex justify-between items-center gap-2">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-start justify-center gap-2">
          <Skeleton className="h-12 w-12" />
          <div className="space-y-2">
            <Skeleton className="w-10 h-6" />
            <Skeleton className="w-10 h-6" />
          </div>
        </div>
      ))}
    </Skeleton>
  </Skeleton>
);

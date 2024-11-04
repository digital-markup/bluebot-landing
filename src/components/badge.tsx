"use client";
import { BusinessType } from "@/types/index.types";

interface BadgeProps {
  businessType: BusinessType;
}

function Badge({ businessType: { id, name, icon: Icon } }: BadgeProps) {
  return (
    <div
      id={String(id)}
      className="px-4 py-3 h-12 min-w-[200px] bg-slate-50 rounded-full flex justify-center items-center gap-x-2 hover:bg-blue-50 transition-all hover:shadow-xl hover:shadow-blue-400/50"
    >
      <Icon className="w-6 h-6" />
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
}

export default Badge;

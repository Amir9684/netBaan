import { cn } from "../lib/utils";

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Skeleton = ({ className, children }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#1D2229] to-[#252b32] animate-pulse rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

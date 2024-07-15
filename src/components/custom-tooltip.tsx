import { Separator } from "./seperator";

export const CustomTooltip = ({ active, payload }: any) => {
  if (!active) return null;

  const title = payload[0].payload.name;
  const value = payload[0].value;

  return (
    <div className="absolute bottom-0 rounded-lg bg-gray-300 shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3">{title}</div>
      <Separator />
      <div className="p-2 px-3 space-y-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-right font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
};

import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import { CustomTooltip } from "./custom-tooltip";

type Props = {
  data: {
    name: string;
    value: number;
  }[];
};

export function Chart({ data }: Props) {
  return (
    <ResponsiveContainer width={110} height={60}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#3b80ba" />
      </BarChart>
    </ResponsiveContainer>
  );
}

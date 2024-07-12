import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface AssetsTableProps {
  data:
    | {
        grade: string;
        lastSeen: number;
        name: string;
        total_vuls: number;
        type: string;
      }[]
    | null;
  filteredBy: string[];
}

export const AssetsTable = ({ data, filteredBy }: AssetsTableProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-white" />
      </div>
    );

  return (
    <div className="relative overflow-x-auto w-11/12 mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 space-y-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-[#464660] dark:text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Grade
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total Vulnerabilities
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Last Seen
            </th>
          </tr>
        </thead>
        <tbody className="space-between">
          {data
            ?.filter((asset) =>
              filteredBy.length === 0 ? asset : filteredBy.includes(asset.type)
            )
            .map((asset) => (
              <tr
                key={asset.name}
                className="bg-white dark:bg-[#2a2b3f] rounded-xl"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="hexagon relative">
                    <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                      {asset.grade}
                    </span>
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {asset.name}
                </th>
                <td className="px-6 py-4">{asset.total_vuls}</td>
                <td className="px-6 py-4">{asset.lastSeen}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

import { useEffect, useState } from "react";

import { Card, CardSkeleton } from "./components/card";
import { api } from "./core/interceptor";
import { Response } from "./types";
import { AssetsTable } from "./components/assets-table";

function App() {
  const [data, setData] = useState<Response | null>(null);
  const [filteredBy, setFilteredBy] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result: Response = await api.get("");

      setData(result);
    };

    getData();
  }, []);

  const assets = data ? data.assets : null;
  const cloud = data ? data.cloud : null;
  const domain = data ? data.domain : null;
  const ipAddress = data ? data.ip : null;

  return (
    <div className="w-full min-h-full bg-gray-900">
      <div className="md:p-5 space-y-10 max-w-[1920px] mx-auto">
        {/* Cards */}

        <div className="flex flex-row flex-wrap justify-evenly items-center gap-5">
          {data ? (
            <>
              <Card
                name="Domains"
                live={domain?.live || [10, 12, 13, 4, 5]}
                monitored={domain?.monitored || [10, 12, 13, 4, 5]}
                total={domain?.total}
                liveTotal={domain?.total_live}
                monitorTotal={domain?.total_monitored}
                ips={domain?.ips}
                ports={domain?.ports}
                vulns={domain?.vulns}
                color="orange"
                filteredBy={filteredBy}
                setFilteredBy={setFilteredBy}
                type="domain"
                imageSrc="/src/assets/earth.svg"
              />
              <Card
                name="IP Addresses"
                live={ipAddress?.live || [10, 12, 13, 4, 5]}
                monitored={ipAddress?.monitored || [10, 12, 13, 4, 5]}
                total={ipAddress?.total}
                liveTotal={ipAddress?.total_live}
                monitorTotal={ipAddress?.total_monitored}
                ips={ipAddress?.ips}
                ports={ipAddress?.ports}
                vulns={ipAddress?.vulns}
                color="purple"
                filteredBy={filteredBy}
                setFilteredBy={setFilteredBy}
                type="ip"
                imageSrc="/src/assets/earth.svg"
              />
              <Card
                name="Cloud Accounts"
                live={cloud?.live || [10, 12, 13, 4, 5]}
                monitored={cloud?.monitored || [10, 12, 13, 4, 5]}
                total={cloud?.total}
                liveTotal={cloud?.total_live}
                monitorTotal={cloud?.total_monitored}
                ips={cloud?.ips}
                ports={cloud?.ports}
                vulns={cloud?.vulns}
                color="yellow"
                filteredBy={filteredBy}
                setFilteredBy={setFilteredBy}
                type="cloud"
                imageSrc="/src/assets/upload-cloud.svg"
              />
            </>
          ) : (
            <>
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </>
          )}
        </div>

        {/* Assets */}

        <div className="bg-[#1D2229] w-full max-w-[1480px] mx-auto px-4 py-3 space-y-10 rounded-xl">
          <h1 className="font-bold text-xl text-white">Assets</h1>
          <AssetsTable data={assets} filteredBy={filteredBy} />
        </div>
      </div>
    </div>
  );
}

export default App;

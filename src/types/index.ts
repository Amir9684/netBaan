export type Response = {
  assets: {
    grade: string;
    lastSeen: number;
    name: string;
    total_vuls: number;
    type: string;
  }[];
  cloud: {
    ips: number;
    live: number[];
    monitored: number[];
    ports: number;
    total: number;
    total_live: number;
    total_monitored: number;
    vulns: number;
  };
  domain: {
    ips: number;
    live: number[];
    monitored: number[];
    ports: number;
    total: number;
    total_live: number;
    total_monitored: number;
    vulns: number;
  };
  ip: {
    ips: number;
    live: number[];
    monitored: number[];
    ports: number;
    total: number;
    total_live: number;
    total_monitored: number;
    vulns: number;
  };
};

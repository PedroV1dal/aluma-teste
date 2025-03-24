export type UpcomingLaunchId = string;

export interface UpcomingLaunchList {
  id: UpcomingLaunchId;
  name: string;
  date_utc: string;
  patch?: {
    small?: string;
    large?: string;
  };
}

export interface UpcomingLaunchDetails {
  id: string;
  name: string;
  date_utc: string;
  upcoming: boolean;
  success?: boolean;
  details?: string;
  rocket?: string;
  launchpad?: string;
  cores: Array<{
    flight?: number;
    landing_type?: string;
    landpad?: string;
    landing_success?: boolean;
    reused: boolean;
  }>;
  payloads: string[];
  capsules: string[];
  patch?: {
    small?: string;
    large?: string;
  };
  reddit?: {
    launch?: string;
  };
  webcast?: string;
  article?: string;
  wikipedia?: string;
  presskit?: string;
  flickr?: {
    original?: string[];
  };
}

export interface UpcomingLaunch {
  id: string;
  name: string;
}

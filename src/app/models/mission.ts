export interface Mission {
  flight_number: number;
  mission_name: string;
  date_utc: string;
  details: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        land_success: boolean;
      }[];
    };
  };
  launch_site: {
    site_name: string;
  };
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}

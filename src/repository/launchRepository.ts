import { SpaceXApiService } from "@/service/spacexApiService";
import {
  UpcomingLaunchList,
  UpcomingLaunchDetails,
} from "@/utils/types/launchs";
import { FetchResponse } from "@/api/models";
import { ApiService } from "@/api/api";

export const spacexApiService = new SpaceXApiService();
export const apiService = new ApiService(spacexApiService);

export const LaunchRepository = {
  fetchAll: async (): Promise<FetchResponse<UpcomingLaunchList[]>> => {
    return apiService.get<UpcomingLaunchList[]>("/launches/upcoming", false);
  },

  getUpcomingLaunchById: async (
    upcomingLaunchId: string
  ): Promise<FetchResponse<UpcomingLaunchDetails>> => {
    return apiService.get<UpcomingLaunchDetails>(
      `/launches/${upcomingLaunchId}`
    );
  },
};

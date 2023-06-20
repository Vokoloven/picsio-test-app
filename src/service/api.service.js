import { axiosConfig } from "./axiosConfig";

export const getCommentsApi = async () => {
  try {
    const getCommentsApi = await axiosConfig.get("", {
      params: {
        limit: 3,
      },
    });
    const { data } = getCommentsApi;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

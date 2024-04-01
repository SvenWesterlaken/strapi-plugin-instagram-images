import axiosInstance from '../../src/utils/axiosInstance';

// TODO: add typings
// TODO: probably better to use string to getTrad for the key to the endpoint
const instagramRequests = {
  getTaskCount: async () => {
    const data = await axiosInstance.get(`/instagram-images/count`);
    return data;
  },
  getSettings: async () => {
    const data = await axiosInstance.get(`/instagram-images/settings`);
    return data;
  },
  setSettings: async (data: any) => {
    return await axiosInstance.post(`/instagram/settings`,
      data
    );
  },
};
export default instagramRequests;

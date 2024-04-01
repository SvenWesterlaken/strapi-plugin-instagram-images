import axiosInstance from "../../src/utils/axiosInstance";

// TODO: add typings
const instagramBasicApiRequest = {
  getShortLivedToken: async (data: any) => {
    return await axiosInstance.post('/instagram/getShortLivedToken', data);
  },
  downloadImages: async (data: any) => {
    return await axiosInstance.post('/instagram/downloadImages', data);
  },
};
export default instagramBasicApiRequest;

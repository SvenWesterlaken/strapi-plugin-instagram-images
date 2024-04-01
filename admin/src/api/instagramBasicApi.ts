import axiosInstance from "../../src/utils/axiosInstance";

// TODO: add typings
const instagramBasicApiRequest = {
  getShortLivedToken: async (data: any) => {
    return await axiosInstance.post('/instagram-images/getShortLivedToken', data);
  },
  downloadImages: async (data: any) => {
    return await axiosInstance.post('/instagram-images/downloadImages', data);
  },
};
export default instagramBasicApiRequest;

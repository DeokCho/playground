import axios, { Method } from "axios";

const axiosModule = (
  method: Method,
  url: string,
  data: any = {},
) => {
  return axios({
    url,
    method,
    params: { ...data },
  })
    .then((response) => response)
    .catch((err) => err);
};

export default axiosModule;

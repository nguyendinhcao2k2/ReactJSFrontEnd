import { $axios } from "../service/axios";

export const useApi = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return {
    getAllProduct: async () => {
      let data = [];
      await $axios
        .get("chi-tiet-san-pham", config)
        .then((response) => {
          data = response.data;
        })
        .catch((error) => console.log(error));
      return data;
    },

    getOneProduct: async (id) => {
      let data = {};
      await $axios
        .get("chi-tiet-san-pham/" + id, config)
        .then((response) => {
          data = response.data;
          console.log(data);
        })
        .catch((error) => console.log(error));
      return data;
    },
  };
};

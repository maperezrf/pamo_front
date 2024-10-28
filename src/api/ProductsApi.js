import axios from 'axios'

export const ProductsShopifyApi = async () => {
  const response = await axios.get(import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_GET_PRODUCTS)
  return (
    response
  )
}

export const PublicationMeliForSku = async (sku) => {
  const response = await axios.post(
    import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_POST_ENDPOINT,
    sku
  );
  return response;
};

export const GetListFilesApi = async () => {
  console.log(import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_FILES_SHEET + 'files')
  const response = await axios.get(
    import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_FILES_SHEET + 'files'
  );
  return response;
};

export const ReadFileApi = async (id) => {
  const data = {
    id: id
  };
  const response = await axios.post(
    import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_FILES_SHEET,
    data
  );
  return response;
};

export const SendDataShopiApi = async (id) => {
  const data = {
    id: id
  };
  const response = await axios.post(
    import.meta.env.VITE_MAIN_URL + import.meta.env.VITE_SEND_SHOPI,
    data
  );
  return response;
};



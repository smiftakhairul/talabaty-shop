import useAxios from "./useAxios";

const useApi = () => {
  const axiosClient = useAxios();

  const login = async (data) => {
    return await axiosClient.apiClient('POST', 'login', data);
  }

  const register = async (data) => {
    return await axiosClient.apiClient('POST', 'register', data);
  }

  const profile = async (userId) => {
    return await axiosClient.apiClient('GET', 'user-profile/' + userId + '/');
  }

  const updateUser = async (userId, data) => {
    return await axiosClient.apiClient('PATCH', 'users/' + userId + '/', data);
  }

  const updateProfile = async (data) => {
    return await axiosClient.apiClient('POST', 'update-user-profile', data);
  }

  const categories = async () => {
    return await axiosClient.apiClient('GET', 'categories');
  }

  const addMenu = async (data) => {
    return await axiosClient.apiClient('POST', 'menus/create/', data);
  }

  const menus = async (user_id, page = 1) => {
    return await axiosClient.apiClient('GET', 'menus/?user_id='+user_id+'&page=' + page);
  }

  const updateMenu = async (data, menuId) => {
    return await axiosClient.apiClient('PUT', 'menus/'+menuId+'/update/', data);
  }

  const deleteMenu = async (menuId) => {
    return await axiosClient.apiClient('DELETE', 'menus/'+menuId+'/delete/');
  }

  const userOrders = async (id) => {
    return await axiosClient.apiClient('GET', 'shop-orders/' + id + '/');
  }

  const userPaginatedOrders = async (id, page = 1) => {
    return await axiosClient.apiClient('GET', 'shop-paginated-orders/' + id + '/?page=' + page);
  }

  const updateOrders = async (data, orderId) => {
    return await axiosClient.apiClient('PUT', 'orders/'+orderId+'/update/', data);
  }

  return {
    login,
    register,
    profile,
    updateUser,
    updateProfile,
    categories,
    addMenu,
    menus,
    updateMenu,
    deleteMenu,
    userOrders,
    userPaginatedOrders,
    updateOrders
  };
}

export default useApi;

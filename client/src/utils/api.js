import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

const apiService = {
  // Fetch Blogs with related Reviews and Admin User
  fetchBlogs: async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs?populate[0]=Image&populate[1]=reviews&populate[2]=admin_user`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },

  // Fetch Categories with related Products
  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories?populate[0]=Image&populate[1]=products`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Fetch Contacts
  fetchContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return [];
    }
  },

  // Fetch Orders with related Products and User
  fetchOrders: async () => {
    try {
      const response = await axios.get(`${API_URL}/orders?populate[0]=products&populate[1]=users_permissions_user`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  },

  // Fetch Products with Categories, Reviews, and Admin User
  fetchProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products?populate[0]=categories&populate[1]=reviews&populate[2]=admin_user&populate[3]=Image`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Fetch Reviews with related Product and Blog
  fetchReviews: async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews?populate[0]=product&populate[1]=blog&populate[2]=users_permissions_user`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  },

  // Fetch Users with Orders and Reviews
  fetchUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users?populate[0]=orders&populate[1]=reviews`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  },

  // Fetch Single Product by ID with full relationships
  fetchProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}?populate[0]=categories&populate[1]=reviews&populate[2]=admin_user&populate[3]=Image`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  // Create Order
  createOrder: async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/orders`, { data: orderData });
      return response.data.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },
};

export default apiService;

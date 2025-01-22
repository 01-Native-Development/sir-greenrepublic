import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

// API Service for fetching data
const apiService = {
  // Fetch Blogs
  fetchBlogs: async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },

  // Fetch Categories
  fetchCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories?populate=*`);
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

  // Fetch Orders
  fetchOrders: async () => {
    try {
      const response = await axios.get(`${API_URL}/orders?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  },

  // Fetch Products
  fetchProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Fetch Reviews
  fetchReviews: async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  },

  // Fetch Users
  fetchUsers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  },
};

export default apiService;

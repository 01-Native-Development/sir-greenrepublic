const API_BASE_URL = 'http://localhost:1337/api';

// Fetch search filter data
export const fetchSearchFilter = async () => {
  return await fetchData('search-components');
};

// Fetch page data
export async function fetchHomePage() {
  return await fetchData('home-page');
}

export const fetchAboutPage = async () => {
  const res = await fetch('http://localhost:1337/api/about-page');
  if (!res.ok) {
    throw new Error('Failed to fetch About Page data');
  }
  return await res.json();
};


export async function fetchBlogPage() {
  return await fetchData('blogs');
}

export async function fetchShopPage() {
  return await fetchData('products');
}

export async function fetchContactPage() {
  return await fetchData('contact-page');
}

// Fetch blog by slug
// Assuming fetchBlogBySlug is a function that fetches blog data based on a slug
export async function fetchBlogBySlug(slug) {
  const response = await fetch(`http://localhost:1337/api/blogs?slug=${slug}`);
  const data = await response.json();
  return data;
}


// Fetch product by ID
export async function fetchProductById(id) {
  return await fetchData(`products/${id}`);
}

// Generic data fetching function with error handling
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null; // or return {} or fallback data if needed
  }
}

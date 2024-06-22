const API_KEY = '34de86f08ffc4998abcdef358b8e0172';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.articles)
        return data.articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};
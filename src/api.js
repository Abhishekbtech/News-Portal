import axios from 'axios';

const API_KEY = '34de86f08ffc4998abcdef358b8e0172';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                category,
                page,
                apiKey: API_KEY,
                country: 'us',
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};
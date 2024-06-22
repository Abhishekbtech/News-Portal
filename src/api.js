export const fetchArticles = async (category = 'general', page = 1) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=34de86f08ffc4998abcdef358b8e0172`, {
            protocol: 'https:',
            // other options...
          })
        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data)
        return data.articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};
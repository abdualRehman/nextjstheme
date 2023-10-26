import axios from "axios";


export const postFetcher = async ({ url, body }) => {
    const response = await axios.post(url, body).catch((error) => {
        // Handle the error here, e.g., by logging or rethrowing
        throw error; // Rethrow the error for proper error handling in the component
    });

    if (response) {
        return response.data;
    }
    throw new Error('Failed to fetch data'); // Or another appropriate error message
};
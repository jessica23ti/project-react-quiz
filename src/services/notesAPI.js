import axios from 'axios';

const API_URL = "https://oqvjtugjwnwfimzemnll.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xdmp0dWdqd253ZmltemVtbmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODU3MDQsImV4cCI6MjA2NTI2MTcwNH0.a53-09-9MSULX7M88jKxi6RLBIFjd0EOwt0S04OYfek";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const notesAPI = {
    async fetchNotes() {
        try {
            const response = await axios.get(API_URL, { headers });
            return response.data;
        } catch (error) {
            console.error("Error fetching notes:", error.response?.data || error.message);
            throw error;
        }
    },

    async createNote(data) {
        try {
            const response = await axios.post(API_URL, data, { headers });
            return response.data;
        } catch (error) {
            console.error("Error creating note:", error.response?.data || error.message);
            throw error;
        }
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    async UpdateNote(id,data) {
        await axios.patch(`${API_URL}?id=eq.${id}`, data,{ headers })
    }
};

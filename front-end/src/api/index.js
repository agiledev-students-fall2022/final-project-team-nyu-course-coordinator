import axios from 'axios';
// import env from "react-dotenv";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOSTNAME,
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const fetchCourses = async () => api.get('/courses')

// there's no fetchSections
export const createCourse = (newCourse) => api.post('/courses', newCourse);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);
export const changeSection = (id) => api.patch(`/courses/${id}`);
export const addToSchedule = async (sectionId, userId) => api.patch(`/courses/${sectionId}/${userId}`);
export const removeFromSchedule = async (sectionId, userId) => api.delete(`/courses/${sectionId}/${userId}`);
export const signIn = (formData) => api.post('/users/signin', formData);
export const signUp = (formData) => api.post('/users/signup', formData);
export const fetchUsers = async (id) => api.get(`/users/${id}`);
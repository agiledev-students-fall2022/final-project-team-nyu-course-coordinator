import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
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
export const addToSchedule = async (sectionId) => api.patch(`/courses/${sectionId}`);
export const removeFromSchedule = (id) => api.delete(`/courses/${id}`);
export const signIn = (formData) => api.post('/users/signin', formData);
export const signUp = (formData) => api.post('/users/signup', formData);
export const fetchUsers = async () => api.get('/users');
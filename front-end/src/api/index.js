import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const fetchCourses = async () => api.get('/courses')

// there's no fetchSections
export const createCourse = (newCourse) => api.post('/courses', newCourse);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);
export const changeSection = (id) => api.patch(`/courses/${id}`);
export const addToSchedule = async (sectionId) => api.patch(`/courses/${sectionId}`);
export const removeFromSchedule = (id) => api.delete(`/courses/${id}`);
export const signin = (formData) => api.post('/user/signin', formData);
export const signup = (formData) => api.post('/user/signup', formData);
export const fetchUsers = async () => api.get('/users');
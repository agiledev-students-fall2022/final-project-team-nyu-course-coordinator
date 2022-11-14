import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchCourses = () => api.get('/courses');
export const createCourse = (newCourse) => api.post('/courses', newCourse);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);
export const changeSection = (id) => api.patch(`/courses/${id}`);
<<<<<<< Updated upstream
export const addToSchedule = (id) => api.patch(`/courses/${id}`);
export const removeFromSchedule = (id) => api.delete(`/courses/${id}`);
=======
export const addToSchedule = async (sectionId) => api.patch(`/courses/${sectionId}`);
export const removeFromSchedule = async (sectionId) => api.delete(`/courses/${sectionId}`);
>>>>>>> Stashed changes
export const signin = (formData) => api.post('/user/signin', formData);
export const signup = (formData) => api.post('/user/signup', formData);
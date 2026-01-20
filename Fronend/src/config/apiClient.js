/**
 * API Client - Utilidad para hacer peticiones a la API con autenticación
 */

import { API_BASE_URL, API_ENDPOINTS } from './api.js';

/**
 * Obtiene el token de acceso del localStorage
 */
export function getAccessToken() {
  return localStorage.getItem('access_token');
}

/**
 * Guarda el token de acceso en localStorage
 */
export function setAccessToken(token) {
  localStorage.setItem('access_token', token);
}

/**
 * Elimina el token y datos de usuario del localStorage
 */
export function clearAuth() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
}

/**
 * Verifica si el usuario está autenticado
 */
export function isAuthenticated() {
  return !!getAccessToken();
}

/**
 * Redirige al login si no está autenticado
 */
export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = '/';
    return false;
  }
  return true;
}

/**
 * Realiza una petición autenticada a la API
 * @param {string} url - URL completa del endpoint
 * @param {object} options - Opciones de fetch (method, body, headers, etc.)
 * @returns {Promise<Response>}
 */
export async function fetchAPI(url, options = {}) {
  const token = getAccessToken();
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // Si recibimos 401, el token expiró
  if (response.status === 401) {
    clearAuth();
    window.location.href = '/';
    throw new Error('Sesión expirada');
  }

  return response;
}

/**
 * Realiza una petición GET autenticada
 */
export async function getAPI(url) {
  return fetchAPI(url, { method: 'GET' });
}

/**
 * Realiza una petición POST autenticada
 */
export async function postAPI(url, data) {
  return fetchAPI(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Realiza una petición PUT autenticada
 */
export async function putAPI(url, data) {
  return fetchAPI(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Realiza una petición DELETE autenticada
 */
export async function deleteAPI(url) {
  return fetchAPI(url, { method: 'DELETE' });
}

/**
 * Obtiene los datos del usuario actual desde localStorage
 */
export function getCurrentUser() {
  try {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Obtiene el rol del usuario actual
 */
export function getUserRole() {
  return localStorage.getItem('userRole') || 'student';
}

// Exportar endpoints para fácil acceso
export { API_ENDPOINTS, API_BASE_URL };

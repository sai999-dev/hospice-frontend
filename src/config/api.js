/**
 * API Configuration
 * Centralized API endpoint configuration using Vite environment variables
 */

// Get API base URL from environment variables
// In production (Render), this will be the full backend URL
// In development, this will be '/api' (proxied by Vite)
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// API endpoints
export const API_ENDPOINTS = {
  submissions: `${API_BASE_URL}/api/submissions`,
  adminSubmissions: `${API_BASE_URL}/api/admin/submissions`,
  debugEmail: `${API_BASE_URL}/api/debug/email`,
}

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`
}

// Export base URL for direct use
export { API_BASE_URL }

export default API_ENDPOINTS


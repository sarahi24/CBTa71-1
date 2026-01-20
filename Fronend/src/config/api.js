// API Configuration
export const API_BASE_URL = 'https://nginx-production-728f.up.railway.app/api';

// API Documentation
export const API_DOCUMENTATION = `${API_BASE_URL}/documentation`;

// API Endpoints organized by category
export const API_ENDPOINTS = {
  // Admin - Gestión administrativa (asignación e importación de usuarios)
  admin: {
    base: `${API_BASE_URL}/admin`,
    assignUsers: `${API_BASE_URL}/admin/assign`,
    importUsers: `${API_BASE_URL}/admin/import`,
  },

  // Auth - Autenticación de usuarios, tokens, contraseñas y verificación
  auth: {
    base: `${API_BASE_URL}/auth`,
    login: `${API_BASE_URL}/auth/login`,
    logout: `${API_BASE_URL}/auth/logout`,
    register: `${API_BASE_URL}/auth/register`,
    refresh: `${API_BASE_URL}/auth/refresh`,
    verify: `${API_BASE_URL}/auth/verify`,
    resetPassword: `${API_BASE_URL}/auth/reset-password`,
    changePassword: `${API_BASE_URL}/auth/change-password`,
  },

  // Careers - Operaciones relacionadas con carreras
  careers: `${API_BASE_URL}/careers`,

  // Students - Gestión y consulta de estudiantes
  students: `${API_BASE_URL}/students`,

  // Payment Concepts - Gestión de conceptos de pago
  concepts: `${API_BASE_URL}/payment-concepts`,

  // Debts - Gestión y consulta de pagos pendientes
  debts: `${API_BASE_URL}/debts`,

  // Payments - Gestión y consulta de pagos registrados
  payments: `${API_BASE_URL}/payments`,

  // Payment History - Historial de pagos
  paymentHistory: `${API_BASE_URL}/payment-history`,

  // Pending Payment - Pagos pendientes
  pendingPayments: `${API_BASE_URL}/pending-payments`,

  // Cards - Gestión de métodos de pago (tarjetas)
  cards: `${API_BASE_URL}/cards`,

  // Dashboard - Panel de control del usuario (estadísticas, pagos, resumen)
  dashboard: {
    base: `${API_BASE_URL}/dashboard`,
    stats: `${API_BASE_URL}/dashboard/stats`,
    payments: `${API_BASE_URL}/dashboard/payments`,
    summary: `${API_BASE_URL}/dashboard/summary`,
  },

  // Dashboard Staff - Panel de control del personal
  dashboardStaff: `${API_BASE_URL}/dashboard-staff`,

  // Users - Operaciones para actualizar usuarios
  users: `${API_BASE_URL}/users`,

  // Notifications - Gestión de notificaciones de usuarios
  notifications: `${API_BASE_URL}/notifications`,

  // Parents - Invitar y aceptar padres de alumnos
  parents: {
    base: `${API_BASE_URL}/parents`,
    invite: `${API_BASE_URL}/parents/invite`,
    accept: `${API_BASE_URL}/parents/accept`,
  },

  // FindEntity - Buscar usuarios, pagos y conceptos
  find: {
    base: `${API_BASE_URL}/find`,
    users: `${API_BASE_URL}/find/users`,
    payments: `${API_BASE_URL}/find/payments`,
    concepts: `${API_BASE_URL}/find/concepts`,
  },

  // Payouts - Gestión de pagos salientes
  payouts: `${API_BASE_URL}/payouts`,
};

// Helper function to build API URLs
export function getApiUrl(endpoint) {
  return `${API_BASE_URL}${endpoint}`;
}

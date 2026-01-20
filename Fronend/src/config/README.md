# API Configuration

This file contains the centralized API configuration for the frontend application.

## Backend API URL

The backend API is hosted at: `https://nginx-production-728f.up.railway.app/api`

## API Documentation

Full API documentation is available at: https://nginx-production-728f.up.railway.app/api/documentation

## Usage

Import the API configuration in your components:

```javascript
import { API_ENDPOINTS, API_BASE_URL, getApiUrl } from '../config/api.js';

// Use predefined endpoints
fetch(API_ENDPOINTS.students)

// Use nested endpoints
fetch(API_ENDPOINTS.auth.login)

// Or build custom URLs
fetch(getApiUrl('/custom-endpoint'))
```

## Available Endpoints

### Admin
Gestión administrativa (asignación e importación de usuarios)
- `API_ENDPOINTS.admin.base`
- `API_ENDPOINTS.admin.assignUsers`
- `API_ENDPOINTS.admin.importUsers`

### Auth
Autenticación de usuarios, tokens, contraseñas y verificación
- `API_ENDPOINTS.auth.login`
- `API_ENDPOINTS.auth.logout`
- `API_ENDPOINTS.auth.register`
- `API_ENDPOINTS.auth.refresh`
- `API_ENDPOINTS.auth.verify`
- `API_ENDPOINTS.auth.resetPassword`
- `API_ENDPOINTS.auth.changePassword`

### Careers
Operaciones relacionadas con carreras
- `API_ENDPOINTS.careers`

### Students
Gestión y consulta de estudiantes registrados
- `API_ENDPOINTS.students`

### Payment Concepts
Gestión de conceptos de pago (creación, actualización, activación, eliminación)
- `API_ENDPOINTS.concepts`

### Debts
Gestión y consulta de pagos pendientes y validación
- `API_ENDPOINTS.debts`

### Payments
Gestión y consulta de pagos registrados
- `API_ENDPOINTS.payments`

### Payment History
Historial de pagos
- `API_ENDPOINTS.paymentHistory`

### Pending Payments
Pagos pendientes
- `API_ENDPOINTS.pendingPayments`

### Cards
Gestión de métodos de pago (tarjetas) asociados a los usuarios
- `API_ENDPOINTS.cards`

### Dashboard
Panel de control del usuario (estadísticas, pagos y resumen financiero)
- `API_ENDPOINTS.dashboard.base`
- `API_ENDPOINTS.dashboard.stats`
- `API_ENDPOINTS.dashboard.payments`
- `API_ENDPOINTS.dashboard.summary`

### Dashboard Staff
Panel de control del personal
- `API_ENDPOINTS.dashboardStaff`

### Users
Operaciones para actualizar usuarios
- `API_ENDPOINTS.users`

### Notifications
Gestión de notificaciones de usuarios
- `API_ENDPOINTS.notifications`

### Parents
Invitar y aceptar padres de alumnos
- `API_ENDPOINTS.parents.base`
- `API_ENDPOINTS.parents.invite`
- `API_ENDPOINTS.parents.accept`

### FindEntity
Buscar usuarios, pagos y conceptos
- `API_ENDPOINTS.find.users`
- `API_ENDPOINTS.find.payments`
- `API_ENDPOINTS.find.concepts`

### Payouts
Gestión de pagos salientes
- `API_ENDPOINTS.payouts`

## Updated Files

The following files have been updated to use the centralized API configuration:

1. [ConceptCard.astro](../components/ConceptCard.astro) - Uses API_ENDPOINTS.concepts
2. [payments.astro](../pages/payments.astro) - Uses API_ENDPOINTS.students
3. [estudiante_lista.astro](../pages/estudiante_lista.astro) - Uses direct URL

## Changing the API URL

To change the backend API URL, update the `API_BASE_URL` constant in [api.js](api.js).

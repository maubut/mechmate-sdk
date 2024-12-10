# MechMate SDK

A shared schema library for Mechmate's backend and frontend applications, built with Zod.

## Overview

MechMate SDK provides a single source of truth for data validation schemas used across the MechMate ecosystem. This ensures consistency between the backend API and frontend applications.

## Installation

```bash
# Using npm
npm install github:maubut/mechmate-sdk

# Using yarn
yarn add github:maubut/mechmate-sdk
```

## Usage

### Backend (Express/Node.js)

```typescript
import { schemas } from 'mechmate-sdk';

// Validate customer data
app.post('/customers', (req, res) => {
  const result = schemas.customer.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error);
  }
  // Process validated data...
});
```

### Frontend (React/TypeScript)

```typescript
import { schemas } from 'mechmate-sdk';

// Type inference from schemas
type Customer = z.infer<typeof schemas.customer>;

// Form validation
const validateForm = (data: unknown) => {
  return schemas.customer.safeParse(data);
};
```

## Available Schemas

- `customer` - Customer data validation
- `worksheet` - Worksheet validation
- `mech` - Vehicle information validation
- `address` - Address validation

## Contributing

This is a private package used internally by MechMate applications. Please contact the MechMate team for any questions or issues.

## License

Private - © 2024 MechMate. All rights reserved.

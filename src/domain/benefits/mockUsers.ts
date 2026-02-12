import type { EmployeeProfile } from './types';

export const mockUsers: EmployeeProfile[] = [
  {
    id: 'emp-1',
    country: 'PT',
    contractType: 'employee',
    allowanceBudget: 300,
  },
  {
    id: 'emp-2',
    country: 'ES',
    contractType: 'employee',
    allowanceBudget: 250,
  },
  {
    id: 'emp-3',
    country: 'IT',
    contractType: 'contractor',
    allowanceBudget: 180,
  },
];

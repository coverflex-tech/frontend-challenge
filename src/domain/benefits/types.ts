export type BenefitCategory =
  | 'meal'
  | 'transport'
  | 'health'
  | 'wellness'
  | 'learning'
  | 'insurance';

export interface Benefit {
  id: string;
  name: string;
  category: BenefitCategory;
  isAvailable: boolean;
  monthlyCost: number;
  description: string;
  provider: string;
}

export interface EmployeeProfile {
  id: string;
  country: 'PT' | 'ES' | 'IT';
  contractType: 'employee' | 'contractor';
  allowanceBudget: number;
}

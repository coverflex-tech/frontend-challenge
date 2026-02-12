import type { Benefit } from '../domain/benefits/types';

export interface BenefitsApi {
  getBenefits(): Promise<Benefit[]>;
  getEmployeeBenefits(employeeId: string): Promise<Benefit[]>;
}

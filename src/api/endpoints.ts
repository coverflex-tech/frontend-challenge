export const endpoints = {
  benefits: '/benefits',
  employeeBenefits: (employeeId: string) => `/employees/${employeeId}/benefits`,
};

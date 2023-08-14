import { setupServer } from 'msw/node';
import { getDiscounts } from './discounts';

const handlers = [...getDiscounts];

export const server = setupServer(...handlers);

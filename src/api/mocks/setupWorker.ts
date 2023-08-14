import { getDiscounts } from './discounts';
import { setupWorker } from 'msw';

const handlers = [...getDiscounts];

export const worker = setupWorker(...handlers);

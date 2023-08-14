import { rest } from 'msw';
import { discounts } from '../../fixtures/discounts';

export const getDiscounts = [
  rest.get('/api/discounts', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.json(discounts));
  }),
];

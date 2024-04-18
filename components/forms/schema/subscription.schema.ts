import { z } from 'zod';

export const subscriptionSchema = z.object({
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
});

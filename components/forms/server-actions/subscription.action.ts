'use server';

import { z } from "zod";
import { subscriptionSchema } from "../schema/subscription.schema";

const onSubscribeFormAction = async (prevState: {
  message: string;
  user?: z.infer<typeof subscriptionSchema>;
  issues?: string[];
}, formData: FormData) => {
  const data = Object.fromEntries(formData);
  const parsed = subscriptionSchema.safeParse(data);
  if (parsed.success) {
    console.log(data);
    return { message: "Subscribed successfully!", user: parsed.data }
  } else {
    return {
      message: "Invalid data", error: parsed.error,
      status: 400,
    }
  }
};

export default onSubscribeFormAction;

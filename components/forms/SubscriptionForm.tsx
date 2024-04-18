'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { subscriptionSchema } from './schema/subscription.schema';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useFormState } from 'react-dom';
import { useRef } from 'react';
import onSubscribeFormAction from './server-actions/subscription.action';

const initialState = {
  message: '',
};

export const SubscriptionForm = () => {
  const [state, formAction] = useFormState(onSubscribeFormAction, initialState)
  const form = useForm<z.infer<typeof subscriptionSchema>>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    }
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      {state?.message && <p>{state.message}</p>}
      <Form {...form}>
        <form
          ref={formRef}
          action={formAction}
          onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
        >
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )} />
          <Button type='submit'>Subscribe</Button>
        </form>
      </Form>
    </>
  );
};
import dynamic from "next/dynamic";

export const formsMap = {
  '1. Subscription Form (subscriptionForm)': dynamic(() =>
    import("#/components/forms/SubscriptionForm").then((mod) => mod.SubscriptionForm)
  ),
};

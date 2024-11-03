import { z } from "zod";

export const formSchema = z.object({
  reason: z.string().min(1, "Provide a reason for the roll"),
  requester: z.string().min(1, "Who is requesting the roll?"),
  diceCount: z.coerce.number().int().min(1).max(100).default(1),
  sides: z.coerce.number().int().min(4).max(100).default(10),
});

export const formInitialValues = {
  reason: "",
  requester: "",
  diceCount: 1,
  sides: 10,
};

export type FormSchema = z.infer<typeof formSchema>;

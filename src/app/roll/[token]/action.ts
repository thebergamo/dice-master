"use server";
import { performRoll } from "@/lib/rolls";
import { z } from "zod";

const performRollSchema = z.object({
  token: z.string(),
  results: z.string(),
});

export async function performRollAction(formData: FormData) {
  const parsedData = performRollSchema.safeParse({
    token: formData.get("token"),
    results: formData.get("results"),
  });

  if (!parsedData.success) {
    throw new Error("Results or Token not sent");
  }

  await performRoll(parsedData.data);
}

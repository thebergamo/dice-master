"use server";
import { generateToken } from "@/lib/rolls";
import { formSchema } from "@/components/dice-form/schema";

export async function createRollRequest(formData: FormData) {
  console.log("C", { formData });

  const parsedData = formSchema.safeParse({
    reason: formData.get("reason"),
    requester: formData.get("requester"),
    diceCount: formData.get("diceCount"),
    sides: formData.get("sides"),
  });

  if (!parsedData.success) {
    return {
      errors: parsedData.error.errors,
      token: null,
    };
  }

  const token = await generateToken(parsedData.data);

  return {
    token,
    errors: null,
  };
}

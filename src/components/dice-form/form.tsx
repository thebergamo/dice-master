"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Check, Copy, Dices } from "lucide-react";
import { createRollRequest } from "@/app/action";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormSchema, formSchema, formInitialValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { useState } from "react";

export default function DiceForm() {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formInitialValues,
  });
  const [token, setToken] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/roll/${token}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const onSubmit: SubmitHandler<FormSchema> = async (submittedData) => {
    const formData = new FormData();
    formData.append("reason", submittedData.reason);
    formData.append("requester", submittedData.requester);
    formData.append("diceCount", submittedData.diceCount.toString());
    formData.append("sides", submittedData.sides.toString());

    const { errors, token } = await createRollRequest(formData);

    if (errors) {
      errors.forEach((error) => {
        methods.setError(error.path as unknown as keyof FormSchema, {
          type: "manual",
          message: error.message,
        });
      });
    }

    setToken(token);
    console.log(errors, token);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold">Dice Roller</h1>
        {methods.formState.isSubmitSuccessful && (
          <Alert>
            <Dices className="h-4 w-4" />
            <AlertTitle>Share the rolling</AlertTitle>
            <AlertDescription>
              <p>Share this link with your players to let them see the roll:</p>
              <div className="flex space-x-2">
                <Input
                  id="copyField"
                  type="text"
                  placeholder="Enter text to copy"
                  value={`${window.location.origin}/roll/${token}`}
                />
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="icon"
                  aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
                >
                  {isCopied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="w-full space-y-4">
            <FormField
              control={methods.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Rolling</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter reason for rolling" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="requester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DM</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Who is requesting this roll"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    DM name or nickname requesting the roll.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="diceCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Dice</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of dice" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "die" : "dice"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    How many dice do you want to roll?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="sides"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Dice</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Dice type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[4, 6, 8, 10, 12, 20].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          D{num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    What type of dice do you want to roll?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={methods.formState.isSubmitting}
            >
              <Dices className="mr-2 h-4 w-4" /> Request Roll Dice
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

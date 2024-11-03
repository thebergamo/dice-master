"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { DiceTypes, RPGDice } from "@/components/dice-face";
import { performRollAction } from "./action";

export default function DiceRoll({
  requester,
  numDice,
  sides,
  reason,
  results,
  token,
}: {
  token: string;
  requester: string;
  numDice: string;
  sides: string;
  reason: string;
  results?: string;
}) {
  const [rolls, setRolls] = useState<number[]>(
    results?.split(",").map(Number) || []
  );
  const rollDice = async () => {
    const newRolls = Array.from(
      { length: parseInt(numDice) },
      () => Math.floor(Math.random() * parseInt(sides)) + 1
    );
    setRolls(newRolls);
    const formData = new FormData();
    formData.append("token", token);
    formData.append("results", newRolls.join(","));
    await performRollAction(formData);
  };

  const totalSum = rolls.reduce((sum, roll) => sum + roll, 0);

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <Dices className="h-8 w-8" />
      {!results && (
        <h1 className="text-2xl font-bold">
          {requester} is asking you to Roll
        </h1>
      )}

      {results && (
        <>
          <h1 className="text-2xl font-bold">{requester} request is rolled.</h1>
          <h2 className="text-xl">Results are below.</h2>
        </>
      )}

      <p className="text-xl text-center">
        {numDice} D{sides} dice
      </p>

      {!results && !rolls.length && (
        <Button size="lg" onClick={rollDice}>
          <Dices className="mr-2 h-4 w-4" />
          Roll
        </Button>
      )}

      {rolls.length > 0 && (
        <div className="space-y-4 w-full">
          {reason && <p className="text-center italic">Reason: {reason}</p>}
          <div className="flex flex-wrap justify-center gap-4">
            {rolls.map((roll, index) => (
              <RPGDice
                key={index}
                value={roll}
                type={`D${parseInt(sides)}` as DiceTypes}
              />
            ))}
          </div>
          <p className="text-xl font-semibold text-center">Total: {totalSum}</p>
        </div>
      )}
    </div>
  );
}

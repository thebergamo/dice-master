import { getToken } from "@/lib/rolls";
import DiceRoll from "./roll";

export const dynamic = "force-dynamic";

export default async function RollPage({
  params,
}: {
  params: { token: string };
}) {
  const { token } = await params;
  const rollRequest = await getToken(token);

  if (!rollRequest) {
    return (
      <div className="flex flex-col items-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold">Roll Not Found</h1>
        <p className="text-gray-500">
          The roll you are looking for does not exist or link expired
        </p>
      </div>
    );
  }

  return (
    <DiceRoll
      token={token}
      requester={`${rollRequest.requester}`}
      numDice={`${rollRequest.diceCount}`}
      sides={`${rollRequest.sides}`}
      reason={`${rollRequest.reason}`}
      results={rollRequest.results ? `${rollRequest.results}` : undefined}
    />
  );
}

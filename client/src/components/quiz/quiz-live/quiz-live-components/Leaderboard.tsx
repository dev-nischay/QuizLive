import { useLiveStore } from "../../../../store/liveStore";
import Badge from "./Badge";

export default function Leaderboard() {
  const participants = useLiveStore((state) => state.leaderBoard) ?? [];
  const liveUsers = useLiveStore((state) => state.liveUsers) ?? 0;
  return (
    <div className="lg:sticky lg:top-4 lg:self-start bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 rounded-2xl p-5 h-fit w-full lg:w-[24rem]">
      <div className="flex justify-between mt-2 mb-4">
        <div className="font-bold">Live Participants</div>
        <Badge text={`${liveUsers.length} online`} />
      </div>

      <div className="flex flex-col gap-4">
        {participants.map((e, i) => (
          <LiveParticipant key={i} name={e.name} points={e.score} />
        ))}
      </div>
    </div>
  );
}

const LiveParticipant = ({ name, points }: { name: string; points: number }) => {
  return (
    <div className="w-full border h-14 rounded-lg border-gray-800 bg-black flex justify-start items-center   gap-3 py-2 px-2  hover:scale-105 transition-all ">
      <div className=" text-sm size-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 hover:scale-105 to-teal-600">
        A
      </div>
      <div className="flex flex-col ">
        <div className="capitalize">{name}</div>
        <div className="text-gray-600 font-mono text-xs">{points}</div>
      </div>
    </div>
  );
};

import { Users } from "lucide-react";
import { useLiveStore } from "../../../../store/liveStore";
export const PlayerInLobby = () => {
  const liveUsers = useLiveStore((state) => state.liveUsers);

  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-emerald-500/30 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-emerald-400" />
        Players in Lobby
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {liveUsers.map((name, i) => (
          <div key={i} className="flex items-center gap-2 p-3 bg-black/50 border border-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-sm font-bold">
              {name[0]}
            </div>
            <span className="text-sm text-white font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

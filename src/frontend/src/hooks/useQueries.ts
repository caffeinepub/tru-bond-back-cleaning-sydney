import type { Submission } from "@/backend.d";
import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<Submission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllFormSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

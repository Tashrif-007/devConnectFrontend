import { apiClient } from "./apiClient";
import type { VotePayload, VoteResponse } from "../types";

export const voteService = {
  async submitVote(
    storyId: string,
    payload: VotePayload
  ): Promise<VoteResponse> {
    return apiClient.post<VoteResponse>(`/stories/${storyId}/votes`, payload);
  },
};

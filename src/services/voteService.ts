import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "../constants";
import type { VoteResponse } from "../types";
import type { VotePayload } from "../interfaces";

export const voteService = {
  async submitVote(
    storyId: string,
    payload: VotePayload
  ): Promise<VoteResponse> {
    return apiClient.post<VoteResponse>(
      API_ENDPOINTS.STORIES.VOTES(storyId),
      payload
    );
  },
};

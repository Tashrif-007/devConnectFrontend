import type { ApiResponse } from "./common";

export interface VoteType {
  upvotes: number;
  downvotes: number;
  userVote?: "UPVOTE" | "DOWNVOTE" | null;
}

export type UserVoteType = "UPVOTE" | "DOWNVOTE" | null;

export interface VotePayload {
  voteType: "UPVOTE" | "DOWNVOTE";
}

export type VoteResponse = ApiResponse<VoteType>;

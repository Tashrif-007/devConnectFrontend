import type { ApiResponse } from "../interfaces/common";
import type { VoteType } from "../interfaces/vote";



export type UserVoteType = "UPVOTE" | "DOWNVOTE" | null;

export type VoteResponse = ApiResponse<VoteType>;

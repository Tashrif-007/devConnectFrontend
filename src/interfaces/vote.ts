export interface VoteType {
  upvotes: number;
  downvotes: number;
  userVote?: "UPVOTE" | "DOWNVOTE" | null;
}
export interface VotePayload {
  voteType: "UPVOTE" | "DOWNVOTE";
}
import React from "react";
import FeedLayout from "../components/feed/FeedLayout";
import { Navbar } from "../components/navbar";

const FeedPage: React.FC = () => {
  return (
    <>
      <Navbar />;
      <FeedLayout />;
    </>
  );
};

export default FeedPage;

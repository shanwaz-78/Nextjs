import React from "react";
import { useRouter } from "next/router";

const singleBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Single post {id}</div>;
};

export default singleBlogPage;

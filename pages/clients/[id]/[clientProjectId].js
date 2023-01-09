import React from "react";
import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>The Project Page for a Specific Project for a Specific Client</div>;
};

export default SelectedClientProjectPage;

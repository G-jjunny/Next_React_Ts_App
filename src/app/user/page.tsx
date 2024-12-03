import React from "react";
import getCurrentUser from "../actions/getCurrentUser";

const UserPage = async () => {
  const userDate = await getCurrentUser();
  console.log(userDate);

  return <div>로그인시 보이는 페이지</div>;
};

export default UserPage;

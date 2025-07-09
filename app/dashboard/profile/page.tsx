"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold mb-2">Profile</h1>
      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;

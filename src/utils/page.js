"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.push("/auth/register");
    }
  }, [router]);

  return children;
};

export default PrivateRoute;

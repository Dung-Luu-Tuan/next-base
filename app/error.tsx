"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/404");
  }, [router]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>We are sorry, but something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;

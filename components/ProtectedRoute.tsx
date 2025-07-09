"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user === null) {
      router.push(`/auth/sign-in?redirect=${pathname}`);
    }
  }, [user, pathname, router]);

  if (!user) return null;

  return <>{children}</>;
}

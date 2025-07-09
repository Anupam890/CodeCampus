"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-dot-white/[0.08] px-4 text-white">
      <div className="w-full max-w-md bg-zinc-900/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-1">Reset Password</h2>
        <p className="text-sm text-zinc-400 text-center mb-6">
          Enter your email and we&apos;ll send you a password reset link.
        </p>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <Input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reset Button */}
          <Button className="w-full bg-white text-black hover:bg-gray-200">
            <Send size={18} className="mr-2" />
            Send Reset Link
          </Button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm mt-6 text-zinc-400">
          Remember your password?{" "}
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;

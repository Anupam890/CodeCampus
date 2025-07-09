"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { firebaseAuth, googleProvider } from "@/services/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!email || !password) {
      toast.error("Please fill in all fields");
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Successfully signed in!");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
      toast.success("Signin Success");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-dot-white/[0.08] px-4 text-white">
      <div className="w-full max-w-sm bg-zinc-900/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-1">Welcome Back</h2>
        <p className="text-sm text-zinc-400 text-center mb-6">
          Enter your credentials to access your CodeCampus account
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <Input
              type="email"
              placeholder="name@example.com"
              className="bg-zinc-800 text-white border border-zinc-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-zinc-800 text-white border border-zinc-700 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-zinc-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            <div className="text-right mt-2">
              <Link
                href="/reset-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={18} className="mr-2" />
                Sign In
              </>
            )}
          </Button>

          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-zinc-700" />
            <span className="mx-2 text-sm text-zinc-500">OR CONTINUE WITH</span>
            <div className="flex-grow border-t border-zinc-700" />
          </div>

          <Button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Signing In...
              </>
            ) : (
              <>
                <Image
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Continue with Google
              </>
            )}
          </Button>
        </form>

        <p className="text-center text-sm mt-4 text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

        <p className="text-xs text-center mt-2 text-zinc-500">
          By signing in, you agree to CodeCampus{" "}
          <a href="#" className="underline hover:text-white">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

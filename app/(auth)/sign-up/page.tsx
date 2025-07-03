"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth, googleProvider } from "@/services/firebase";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);

      return (
        toast.error("Passwords do not match") &&
        setError("Passwords do not match")
      );
    }
    if (!fullName || !email || !password) {
      setLoading(false);
      return (
        toast.error("Please fill in all fields") &&
        setError("Please fill in all fields")
      );
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
      toast.success("Account created successfully!");
      setLoading(false);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);

      router.push("/dashboard");
    } catch (err: any) {
      setError("Google sign-in failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-dot-white/[0.08] px-4 text-white">
      <div className="w-full max-w-sm bg-zinc-900/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-1">
          Create an account
        </h2>
        <p className="text-sm text-zinc-400 text-center mb-6">
          Enter your information to create your CodeCampus account
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-zinc-800 text-white border border-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="bg-zinc-800 text-white border border-zinc-700"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-zinc-800 text-white border border-zinc-700 pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-zinc-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <Input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-zinc-800 text-white border border-zinc-700 pr-10"
            />
            <span
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-zinc-400"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200"
          >
            {Loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Creating Account...
              </>
            ) : (
              <>
                <MoveRight size={18} className="mr-2" />
                Create Account
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
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white"
          >
            {Loading ? (
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
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-xs text-center mt-2 text-zinc-500">
          By creating an account, you agree to CodeCampus{" "}
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

export default Register;

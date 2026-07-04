"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { AuthCard } from "../../components/auth/AuthCard";
import { InputField } from "../../components/auth/InputField";
import { PasswordField } from "../../components/auth/PasswordField";
import { PrimaryButton } from "../../components/auth/PrimaryButton";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    // Simulate authentication process purely in React state
    setTimeout(() => {
      setLoading(false);
      if (email === "test@example.com" && password === "Test1234") {
        setSuccess(true);
        // Simulate redirect to home/profile
        setTimeout(() => {
          router.push("/profile");
        }, 1000);
      } else {
        setError("Invalid email or password. Hint: test@example.com / Test1234");
      }
    }, 1000);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back"
        subtitle={
          <>
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Register
            </Link>
          </>
        }
      >
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg animate-fade-in">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg animate-fade-in">
            <p className="text-sm font-medium text-green-700">Successfully logged in! (Simulation)</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            icon={<Mail className="h-5 w-5" />}
          />

          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="pt-2">
            <PrimaryButton type="submit" isLoading={loading}>
              Login to OmegaField
            </PrimaryButton>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

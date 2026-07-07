"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, User as UserIcon, Calendar } from "lucide-react";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { AuthCard } from "../../components/auth/AuthCard";
import { InputField } from "../../components/auth/InputField";
import { PasswordField } from "../../components/auth/PasswordField";
import { PrimaryButton } from "../../components/auth/PrimaryButton";

import { useAuth } from "../../hooks/useAuth";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Password validation logic
  const hasMinLength = formData.password.length >= 8;
  const hasUpper = /[A-Z]/.test(formData.password);
  const hasLower = /[a-z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError("");
    setSuccess(false);

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setGlobalError("All fields are required.");
      return;
    }

    if (!hasMinLength || !hasUpper || !hasLower || !hasNumber) {
      setGlobalError("Please ensure all password requirements are met.");
      return;
    }

    if (!passwordsMatch) {
      setGlobalError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await signup({
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (err: any) {
      const message =
        err?.response?.data?.error || "Registration failed. Please try again.";
      setGlobalError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      illustrationSrc="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    >
      <AuthCard
        title="Create an Account"
        subtitle={
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Login
            </Link>
          </>
        }
      >
        {globalError && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg animate-fade-in">
            <p className="text-sm font-medium text-red-700">{globalError}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg animate-fade-in">
            <p className="text-sm font-medium text-green-700">Account created successfully! Redirecting to login...</p>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <InputField
            id="fullName"
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            icon={<UserIcon className="h-5 w-5" />}
          />

          <InputField
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            icon={<Mail className="h-5 w-5" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              id="gender"
              label="Gender"
              as="select"
              value={formData.gender}
              onChange={handleChange}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />

            <InputField
              id="dateOfBirth"
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              icon={<Calendar className="h-5 w-5" />}
            />
          </div>

          <PasswordField
            id="password"
            label="Create Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          {/* Password Requirements Section */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mt-2">
            <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
              Password Requirements
            </p>
            <ul className="text-sm space-y-1">
              <li className={`flex items-center ${hasMinLength ? "text-green-600" : "text-slate-500"}`}>
                <span className="mr-2">{hasMinLength ? "✓" : "○"}</span> Minimum 8 characters
              </li>
              <li className={`flex items-center ${hasUpper ? "text-green-600" : "text-slate-500"}`}>
                <span className="mr-2">{hasUpper ? "✓" : "○"}</span> One uppercase letter
              </li>
              <li className={`flex items-center ${hasLower ? "text-green-600" : "text-slate-500"}`}>
                <span className="mr-2">{hasLower ? "✓" : "○"}</span> One lowercase letter
              </li>
              <li className={`flex items-center ${hasNumber ? "text-green-600" : "text-slate-500"}`}>
                <span className="mr-2">{hasNumber ? "✓" : "○"}</span> One number
              </li>
            </ul>
          </div>

          <PasswordField
            id="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            error={
              formData.confirmPassword && !passwordsMatch
                ? "Passwords do not match"
                : undefined
            }
          />

          <div className="pt-4">
            <PrimaryButton type="submit" isLoading={loading}>
              Register
            </PrimaryButton>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

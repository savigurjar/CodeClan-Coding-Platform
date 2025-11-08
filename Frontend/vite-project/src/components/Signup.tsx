import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        background:
          "conic-gradient(from 0deg, rgba(2, 22, 15, 0.705), rgba(0, 255, 255, 0.05), transparent, rgba(0, 255, 200, 0.1))",
      }}
    >
      <Card className="w-full max-w-md backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-700 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-green-600 dark:text-green-400">
            Create Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="mt-1 bg-white/60 dark:bg-gray-800/60"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 bg-white/60 dark:bg-gray-800/60"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="mt-1 bg-white/60 dark:bg-gray-800/60 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="mt-1 bg-white/60 dark:bg-gray-800/60 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Sign Up Button */}
            <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold">
              Sign Up
            </Button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 dark:text-green-400 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;

import { LoginForm } from "../components/features/login";

import { useFlags } from "flagsmith/react";

export default function LoginPage(): React.ReactNode {
  const flags = useFlags(["test_a"], ["test_b"]); // only causes re-render if specified flag values / traits change
  console.log("flags", flags);
  return (
    <div
      role="main"
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="text-white">key: </h1>
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
          {true ? String(true) : "Sign in to your account"}
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

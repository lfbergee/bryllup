"use client";

import { useState, useTransition } from "react";
import { Input } from "@/lib/input";
import { Button } from "@/lib/button";
import { Panel } from "./panel";
import { login } from "./server";

export function Login({ prelogin = false }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(prelogin);
  const [_, startTransition] = useTransition();

  const handleLogin = () => {
    startTransition(async () => {
      const res = await login(password);
      setIsAuthenticated(res);
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md w-full m-auto bg-secondary text-primary rounded-xl p-8">
        <h1>Login</h1>
        <Input
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return <Panel />;
}

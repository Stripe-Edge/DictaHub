'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/portal/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-off-white px-6">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-black/5 w-full max-w-md border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
          <p className="text-gray-500">Enter your credentials to access the portal</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block mb-3 font-semibold text-sm uppercase tracking-wider text-gray-400">Email Address</label>
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-3 font-semibold text-sm uppercase tracking-wider text-gray-400">Password</label>
            <Input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button className="w-full" size="lg">Sign In</Button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t have an account? <a href="/admissions" className="text-black font-bold underline underline-offset-4">Apply now</a>
        </p>
      </div>
    </div>
  );
}

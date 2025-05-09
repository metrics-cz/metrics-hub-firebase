'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';

/**
 * Root route = pouhý guard:
 *  – není login  ➜ /auth
 *  – login       ➜ /app
 */
export default function IndexGuard() {
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) =>
      router.replace(u ? '/app' : '/auth'),
    );
    return unsub;
  }, [router]);

  return null; // nikdy nic nevykreslujeme
}

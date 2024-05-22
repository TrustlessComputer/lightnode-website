'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true);
    }
  }, [window]);

  return hydration ? children : null;
};

export default Hydrated;

import { useEffect, useState } from 'react';

import type { Villa } from '@/src/api/data/villas';
import { fetchVillas } from './villas';

export function useVillas() {
  const [data, setData] = useState<Villa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVillas()
      .then((villas) => {
        setData(villas);
        setError(null);
      })
      .catch((err) => {
        setData([]);
        setError(err?.message ?? 'Failed to load villas');
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

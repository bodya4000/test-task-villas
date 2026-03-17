import { useEffect, useState } from 'react';

import type { Villa } from '@/src/api/data/villas';
import { fetchVillaById } from './villa';

export function useVilla(id: number | undefined) {
  const [villa, setVilla] = useState<Villa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id == null) {
      setLoading(false);
      return;
    }
    fetchVillaById(id)
      .then(setVilla)
      .catch((err) => setError(err?.message ?? 'Failed to load villa'))
      .finally(() => setLoading(false));
  }, [id]);

  return { villa, loading, error };
}

import type { Villa } from '@/src/api/data/villas';
import { villas } from '@/src/api/data/villas';

export async function fetchVillaById(id: number): Promise<Villa | null> {
  return new Promise((resolve) => setTimeout(() => resolve(villas.find((v) => v.id === id) ?? null), 500));
}

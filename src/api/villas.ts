import type { Villa } from '@/src/api/data/villas';
import { villas } from '@/src/api/data/villas';

export async function fetchVillas(): Promise<Villa[]> {
  return new Promise((resolve) => setTimeout(() => resolve(villas), 500));
}

import { atom } from 'nanostores';

export const cid = atom('');

export function setCid(id: string) {
  cid.set(id);
}

import type { Item } from '../types/models';

// returns true if query matches the file name
export function filterItems(item: Item, query: string) {
  const normalisedQuery = query.replace(/\s+/g, ' ').trim();
  return item.name.toLowerCase().includes(normalisedQuery.toLowerCase());
}

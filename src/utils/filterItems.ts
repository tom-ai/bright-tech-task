import type { Item } from '../types/models';

// returns true if query matches the file name
export function filterItems(item: Item, query: string) {
  return item.name === query;
}

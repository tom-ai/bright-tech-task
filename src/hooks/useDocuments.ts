import type { Item } from '../types/models';
import { documents } from '../data/documents';
import { useEffect, useState } from 'react';
import { searchFiles } from '../utils/filterItems';

export function useDocuments(query: string): { items: Item[] } {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!query) setItems(documents);
    else setItems(searchFiles(documents, query));
  }, [query]);

  const sortedItems = [...items].sort((a: Item, b: Item) => {
    if (a.type === 'folder' && b.type !== 'folder') return -1;
    if (a.type !== 'folder' && b.type === 'folder') return 1;
    return 0;
  });

  return { items: sortedItems };
}

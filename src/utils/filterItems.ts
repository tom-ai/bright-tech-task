import type { BaseFile, Item } from '../types/models';

export function searchFiles(items: Item[], query: string): BaseFile[] {
  if (!query.trim()) return [];
  const normalisedQuery = query.replace(/\s+/g, ' ').trim();

  const flattenedFiles: BaseFile[] = items.flatMap((item) =>
    item.type === 'folder' ? item.files : [item]
  );

  return flattenedFiles.filter((item) => {
    return item.name.toLowerCase().includes(normalisedQuery.toLowerCase());
  });
}

import type { BaseFile, Item } from '../types/models';

export function filterItems(item: Item, query: string) {
  if (item.type === 'folder') {
    item.files.forEach((item) => filterItems(item, query));
  }

  if (item.type === 'folder') return false;

  const normalisedQuery = query.replace(/\s+/g, ' ').trim();
  return item.name.toLowerCase().includes(normalisedQuery.toLowerCase());
}

export function searchFiles(items: Item[], query: string): BaseFile[] {
  const flattenedFiles: BaseFile[] = items.flatMap((item) =>
    item.type === 'folder' ? item.files : [item]
  );

  const matchingFiles = flattenedFiles.filter((item) => {
    return item.name.includes(query);
  });

  return matchingFiles;
}

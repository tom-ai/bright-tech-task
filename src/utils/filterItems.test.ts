import { describe, expect, it } from 'vitest';
import { filterItems } from './filterItems';
import type { Item } from '../types/models';

describe('Filter Items', () => {
  const items: Item[] = [
    { type: 'pdf', name: 'Company Handbook', added: '2020-01-01' },
    { type: 'doc', name: 'Meeting Minutes', added: '2020-02-01' },
    {
      type: 'folder',
      name: 'Policies',
      files: [
        { type: 'doc', name: 'Holiday Policy', added: '2020-03-01' },
        { type: 'csv', name: 'Sick Leave Data', added: '2020-04-01' },
      ],
    },
    {
      type: 'folder',
      name: 'Reports',
      files: [
        { type: 'pdf', name: 'Annual Report', added: '2020-05-01' },
        { type: 'mov', name: 'Quarterly Highlights', added: '2020-06-01' },
      ],
    },
  ];

  it('should filter by full name', () => {
    const result = items.filter((item) =>
      filterItems(item, 'Company Handbook')
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Company Handbook');
  });
});

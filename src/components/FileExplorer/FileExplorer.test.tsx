import { it, expect, describe } from 'vitest';
import type { BaseFile } from '../../types/models';
import { render, screen } from '@testing-library/react';

import { FileExplorer } from './FileExplorer';

describe('File Explorer', () => {
  describe('When rendering files', () => {
    it('displays the file names', () => {
      const files: BaseFile[] = [
        { type: 'pdf', name: 'Intro Guide', added: '2020-01-01' },
        { type: 'doc', name: 'Meeting Notes', added: '2021-02-02' },
        { type: 'csv', name: 'Data Export', added: '2022-03-03' },
      ];

      render(<FileExplorer items={files} />);

      files.forEach(({ name }) => expect(screen.getByText(name)).toBeVisible());
    });
  });
});

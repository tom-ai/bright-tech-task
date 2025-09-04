import { it, expect, describe } from 'vitest';
import type { BaseFile } from '../../types/models';
import { render, screen } from '@testing-library/react';

import { FileExplorer } from './FileExplorer';

describe('File Explorer', () => {
  describe('When rendering multiple files', () => {
    const files: BaseFile[] = [
      { type: 'pdf', name: 'Intro Guide', added: '2020-01-01' },
      { type: 'doc', name: 'Meeting Notes', added: '2021-02-02' },
      { type: 'csv', name: 'Data Export', added: '2022-03-03' },
    ];

    it('displays the file name', () => {
      render(<FileExplorer items={files} />);

      files.forEach(({ name }) => expect(screen.getByText(name)).toBeVisible());
    });

    it('displays the file type', () => {
      render(<FileExplorer items={files} />);

      files.forEach(({ type }) => expect(screen.getByText(type)).toBeVisible());
    });

    it('displays the file upload date', () => {
      render(<FileExplorer items={files} />);

      files.forEach(({ added }) =>
        expect(screen.getByText(added)).toBeVisible()
      );
    });
  });
});

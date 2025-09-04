import { it, expect, describe } from 'vitest';
import type { BaseFile, Item } from '../../types/models';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

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
  describe('When rendering a single folder with a couple of files', () => {
    const documents: Item[] = [
      {
        type: 'folder',
        name: 'Reports',
        files: [
          { type: 'pdf', name: 'Q1 Report', added: '2023-04-04' },
          { type: 'doc', name: 'Q2 Draft', added: '2023-05-05' },
        ],
      },
    ];

    it('displays the folder name', () => {
      render(<FileExplorer items={documents} />);

      expect(screen.getByText('Reports')).toBeVisible();
    });

    it('the folder can be expanded to view the contents', async () => {
      const folder = userEvent.setup();

      render(<FileExplorer items={documents} />);

      documents.forEach((item) => {
        if (item.type === 'folder') {
          item.files.forEach(({ name }) =>
            expect(screen.getByText(name)).not.toBeVisible()
          );
        }
      });

      await folder.click(screen.getByText('Reports'));

      documents.forEach((item) => {
        if (item.type === 'folder') {
          item.files.forEach(({ name }) =>
            expect(screen.getByText(name)).toBeVisible()
          );
        }
      });
    });
  });
});

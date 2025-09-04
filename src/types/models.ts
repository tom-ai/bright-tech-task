type FileType = 'pdf' | 'doc' | 'csv' | 'mov';

export interface File {
  type: FileType;
  name: string;
  added: string;
}

export interface Folder {
  type: 'folder';
  name: string;
  files: File[];
}

export type Item = File | Folder;

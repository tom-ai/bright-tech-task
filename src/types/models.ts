type FileType = 'pdf' | 'doc' | 'csv' | 'mov';

export interface BaseFile {
  type: FileType;
  name: string;
  added: string;
}

export interface Folder {
  type: 'folder';
  name: string;
  files: BaseFile[];
}

export type Item = BaseFile | Folder;

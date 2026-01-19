
export enum FileType {
  PDF = 'PDF',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
  DOC = 'DOC'
}

export interface DriveFile {
  id: string;
  name: string;
  type: FileType;
  url: string;
  content?: string; // For text files
}

export interface DriveFolder {
  id: string;
  name: string;
  items: (DriveFolder | DriveFile)[];
}

export type DriveItem = DriveFolder | DriveFile;

export function isFolder(item: DriveItem): item is DriveFolder {
  return (item as DriveFolder).items !== undefined;
}

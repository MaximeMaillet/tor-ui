export interface Torrent {
  id: number;
  name: string;
  hash: string;
  finished: boolean;
  active: boolean;
  total: number;
  downloaded: number;
  uploaded: number;
  ratio: number;
  progress: number;
}
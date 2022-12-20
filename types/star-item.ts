export interface StarItem {
  key: string;
  name: string;
  src: string;
  count: number;
}

export type StatType = { [key: string]: StarItem[] }
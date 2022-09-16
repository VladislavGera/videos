export interface Item {
  meetingName: string;
  length: number;
  nrOfParticipants: number;
  score: number;
  date: number;
  videoUrl: string;
}

export interface ItemRes {
  item: Item;
}

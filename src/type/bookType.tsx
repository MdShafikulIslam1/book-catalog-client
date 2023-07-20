export interface IBook  {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    imageUrl: string;
    reviews:Array<string>
  }
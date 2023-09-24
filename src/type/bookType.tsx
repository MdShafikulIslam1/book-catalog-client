export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  imageUrl: string;
  reviews: Array<string>;
}

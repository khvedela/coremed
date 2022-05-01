export interface Post {
  title: string;
  content: string;
  imgUrl?: string;
  owner: string;
  date: Date;
  like?: string[];
  comments?: string[]
}

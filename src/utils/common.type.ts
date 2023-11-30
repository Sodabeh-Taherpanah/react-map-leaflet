import { Key } from "react";

export type DirectoryCategory = {
  id: Key;
  title: string;
  images: ObjImag[];
  category: ObjCategory;
  price: number;
  description: string;
};
export type ObjCategory = {
  id: Key;
  name: string;
  image: ObjImag;
};
export type ObjImag = {
  [id: number]: string;
};


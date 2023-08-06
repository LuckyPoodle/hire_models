export type Species = "dog" | "cat" | "rabbit";

import * as Contentful from "contentful";

export interface TypeSupermodelsFields {
  name?: Contentful.EntryFields.Symbol;
  nationality?: Contentful.EntryFields.Symbol;
  location?: Contentful.EntryFields.Symbol;
  height?: Contentful.EntryFields.Integer;
  imagesUrls?: Contentful.EntryFields.Symbol[];
  id?: Contentful.EntryFields.Integer;
  species?: Contentful.EntryFields.Symbol;
  subspecies?: Contentful.EntryFields.Symbol;
}

export type TypeSupermodels = Contentful.Entry<TypeSupermodelsFields>;

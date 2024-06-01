export type ContentfulWorkItem = {
  sys: {
    id: string;
    publishedAt: string;
  };
  title: string;
  type: string;
};

export interface ContentfulWorkCollection {
  workContentCollection: {
    items: Array<ContentfulWorkItem>;
  };
}

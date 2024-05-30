export type WorkContentCollectionItem = {
  title: string;
  createdAt: string;
  sys: {
    id: string;
    publishedAt: string;
  };
};
export interface WorkContentCollection {
  workContentCollection: {
    items: WorkContentCollectionItem[];
  };
}

export type WorkCointentData = {
  target: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
};

export type WorkContentValue = {
  nodeType: string;
  value: string;
  marks: [];
  data: {};
};

export type WorkContentItem = {
  nodeType: string;
  data: WorkCointentData;
  content: WorkContentValue[];
};

export type WorkContentJsonValues = WorkContentItem[];

export type WorkContentJson = {
  nodeType: string;
  data: object;
  content: WorkContentJsonValues;
};

export type WorkContentData = {
  json: WorkContentJson;
};

export interface WorkContent {
  workContent: {
    title: string;
    createdAt: string;
    type: string;
    content: WorkContentData;
  };
}

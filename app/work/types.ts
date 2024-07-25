export type ContentWorkParagraphType = {
  nodeType: string;
  data: {};
  content: [
    {
      nodeType: string;
      value: string;
      marks: [];
      data: {};
    },
  ];
};

export type ContentWorkType = ContentWorkParagraphType;
export type WorkContentType = {
  workContent: {
    sys: {
      id: string;
    };
    title: string;
    type: string;
    slug: string;
    createdAt: string;
    stack: Array<string>;
    embed: string;
    content: {
      json: {
        nodeType: "document";
        data: {};
        content: Array<ContentWorkType>;
      };
    };
  };
};
export type WorkContentCollectionType = {
  items: Array<WorkContentType>;
};

export type PageWorkType = {
  pageWork?: {
    sys: {
      id: string;
    };
    contentCollection?: WorkContentCollectionType;
  };
};

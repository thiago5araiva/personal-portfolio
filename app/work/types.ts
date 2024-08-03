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
    links: {
      assets: {
        block: Array<{
          url: string;
          width: number;
          height: number;
          title: string;
          sys: {
            id: string;
          };
        }>;
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

export type PageWordContent = {
  workContent: WorkContentType;
};

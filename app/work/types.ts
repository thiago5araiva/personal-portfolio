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

export type WorkContentCollectionType = {
  items: [
    {
      sys: {
        id: string;
      };
      title: string;
      type: string;
      slug: string;
      content: {
        json: {
          nodeType: "document";
          data: {};
          content: Array<ContentWorkType>;
        };
      };
    },
  ];
};

export type PageWorkType = {
  pageWork: {
    sys: {
      id: string;
    };
    contentCollection: WorkContentCollectionType;
  };
};

export type AboutPageType = {
  pageAbout?: {
    title: string;
    subtitle: string;
    cta: string;
    file: {
      url: string;
    };
    content: {
      json: {
        nodeType: "document";
        data: {};
        content: Array<{
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
        }>;
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
};

export interface Store {
  title: string;
  subtitle: string;
  cta: string;
  imagesCollection: {
    items: Array<{
      url: string;
      width: 112;
      height: 43;
      title: string;
    }>;
  };
}
/*** re-usable ***/
export type AssetsCollection = {
  _id: string;
  title: string;
  url: string;
  width: number;
  height: number;
};
/*** re-usable ***/

export type SectionHeroType = {
  _id: string;
  title: string;
  description: string;
  cta: string;
  assetsCollection: {
    items: AssetsCollection[];
  };
};

export type SectionWorkType = {
  _id: string;
  title: string;
  contentCollection: {
    items: Array<{
      _id: string;
      title: string;
      createdAt: string;
      slug: string;
      type: string;
    }>;
  };
};

export type SectionServiceType = {
  _id: string;
  title: string;
  backendStackCollection: {
    items: AssetsCollection[];
  };
  frontStackCollection: {
    items: AssetsCollection[];
  };
  contentCollection: {
    items: Array<{
      _id: string;
      title: string;
      description: string;
    }>;
  };
};

export type PageHomeType = {
  pageHome?: {
    _id: string;
    sectionHero: SectionHeroType;
    sectionWork: SectionWorkType;
    sectionService: SectionServiceType;
  };
};

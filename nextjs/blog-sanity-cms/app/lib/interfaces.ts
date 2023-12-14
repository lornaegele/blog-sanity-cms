interface Base {
  _id: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface PhotoType extends Base {
  title: string;
  description: any;
  date: string;
  shortDescription: string;
  image: any;
  slug: {
    current: string;
  };
}

export interface AboutType extends Base {
  portraitDescription: string;
  portrait: any;
  bio: string;
  email: string;
  descriptionOne: any;
  descriptionTwo: any;
  descriptionThree: any;
  descriptionFour: any;
  descriptionFive: any;
  descriptionSix: any;
  slug: {
    current: string;
  };
}
export interface HomeType extends Base {
  title: string;
  headline: string;
  subheadline: string;
  heroDesktop: any;
  heroMobile: any;
  slug: {
    current: string;
  };
}

export interface NavItem {
  name: string;
  link: string;
}

export interface Image {
  _type: "image";
  assent: Reference;
}

export interface Reference {
  _ref: string;
  _type: "reference";
}

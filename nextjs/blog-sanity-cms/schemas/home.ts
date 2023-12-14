export default {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "subheadline",
      type: "string",
      title: "Subheadline",
    },
    {
      title: "Hero Desktop",
      name: "heroDesktop",
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative Text",
        },
      ],
    },
    {
      title: "Hero Mobile",
      name: "heroMobile",
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative Text",
        },
      ],
    },
  ],
};

export default {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "headline",
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

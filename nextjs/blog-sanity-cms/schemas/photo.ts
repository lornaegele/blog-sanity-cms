export default {
  name: "photo",
  type: "document",
  title: "Photo",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "date",
      type: "string",
      title: "Date",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "shortDescription",
      type: "string",
      title: "Short Description",
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alternative Text" }],
        },
      ],
    },
  ],
};

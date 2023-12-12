export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      title: "Portrait",
      name: "portrait",
      type: "image",
    },
    {
      name: "portraitDescription",
      type: "string",
      title: "Portrait description",
    },
    {
      name: "bio",
      type: "string",
      title: "bio",
    },
    {
      name: "email",
      type: "string",
      title: "E-Mail",
    },
    {
      name: "descriptionOne",
      type: "array",
      title: "Description one",
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
    {
      name: "descriptionTwo",
      type: "array",
      title: "Description two",
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
    {
      name: "descriptionThree",
      type: "array",
      title: "Description three",
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
    {
      name: "descriptionFour",
      type: "array",
      title: "Description four",
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
    {
      name: "descriptionFive",
      type: "array",
      title: "Description five",
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
    {
      name: "descriptionSix",
      type: "array",
      title: "Description six",
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

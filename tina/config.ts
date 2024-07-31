import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: 'e8d14696-0e93-4ca4-bbd2-b190ffbc14c5',
  // Get this from tina.io
  token: '55896f4095bcc883e6dbc59a5708f345ad0d0133',

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        format: "md",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            draft: true,
          }
        },
        fields: [
          {
            name: "draft",
            type: "boolean",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date'
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            multiple: true,
            options: ['in brief', 'in depth']
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
import {  defineConfig } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  token: '55896f4095bcc883e6dbc59a5708f345ad0d0133' // generated on app.tina.io
  clientId: 'e8d14696-0e93-4ca4-bbd2-b190ffbc14c5', // generated on app.tina.io
  branch,

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
        label: "Posts",
        path: "content/posts",
        fields: [
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
            options: [
              {
                value: 'in brief',
                label: 'in brief',
              },
              {
                value: 'in depth',
                label: 'in depth',
              },
            ]
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

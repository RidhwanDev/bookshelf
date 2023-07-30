export default {
  schema: [
    {
      [process.env.GRAPHQL_ENDPOINT as string]: {
        headers: {
          "X-Api-Key": process.env.GRAPHQL_API_KEY,
        },
      },
    },
    `src/api/graphql/*.graphql`,
  ],
  documents: ["src/api/graphql/**/*.ts", `!src/api/graphql/generated.ts`],
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  generates: {
    "./src/api/graphql/generated.ts": {
      config: {
        withHooks: true,
        withRefetchFn: true,
        scalars: {
          AWSDateTime: "Date",
        },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  ignoreNoDocuments: true,
};

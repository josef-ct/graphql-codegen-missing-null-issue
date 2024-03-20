import SchemaBuilder from '@pothos/core';

export const builder = new SchemaBuilder<{}>({});

builder.queryType({});

export type QueryField = Parameters<Parameters<typeof builder.queryFields>[0]>[0];

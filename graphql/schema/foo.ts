import { QueryField, builder } from '../builder';

class Foo {
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  get name() {
    return this.data.name as string;
  }
}

builder.objectType(Foo, {
  name: 'Foo',
  fields: (t) => ({
    name: t.field({
      type: 'String',
      resolve: (parent) => {
        return parent.name;
      },
    }),
  }),
});

export const foo = (t: QueryField) => {
  return t.field({
    type: Foo,
    resolve: async () => {
      return new Foo({ name: 'Foo' });
    },
  });
};

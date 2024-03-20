import fastifyPlugin from 'fastify-plugin';
import mercurius, { MercuriusOptions } from 'mercurius';

const defaultGraphqlConfig: MercuriusOptions = {
  path: '/',
};

export const graphqlPlugin = fastifyPlugin<MercuriusOptions>(async (fastify, config) => {
  void fastify.register(mercurius, { ...defaultGraphqlConfig, ...config });
});

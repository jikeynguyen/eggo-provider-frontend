import { getConfig } from '@/config';
import { AppRoute } from '@/constant';
import { setLastHref } from '@/lib';
import {
  ApolloClient,
  ApolloLink,
  DefaultContext,
  InMemoryCache,
  from,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { createClient } from 'graphql-ws';
import { store } from '../redux/store';

const config = getConfig();

export const bffClient = (function () {
  let instance: ApolloClient<any>;

  function createInstance() {
    return new ApolloClient({
      link: createLink(),
      cache: new InMemoryCache(),
    });
  }

  const createLink = (wsAuthToken?: string) => {
    const preflightMiddleware = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }: DefaultContext) => ({
        headers: {
          ...headers,
          'Apollo-Require-Preflight': 'true',
        },
      }));

      return forward(operation);
    });

    const errorLink = onError(({ graphQLErrors }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          switch (err?.extensions?.code) {
            // Apollo Server sets code to UNAUTHENTICATED
            // when an AuthenticationError is thrown in a resolver
            case 'UNAUTHENTICATED': {
              const expiredUser = store.getState().auth.user;
              const lastHref = location.href.replace(location.origin, '');
              setLastHref(lastHref);
              if (expiredUser) {
                location.href = AppRoute.LOGIN;
              }
            }
          }
        }
      }
    });

    let graphQLLink = createUploadLink({
      uri: config.graphqlUrl || '',
      // Allow sending cookies over cross-origin requests
      // same-origin: Only send cookies for the current domain
      // include: Always send cookies, even for cross-origin requests
      credentials: 'include',
    });

    if (wsAuthToken) {
      const wsUrl = `${config.graphqlWsUrl || ''}`;

      const wsLink = new GraphQLWsLink(
        createClient({
          url: wsUrl,
          connectionParams: {
            token: wsAuthToken,
          },
        })
      );

      graphQLLink = split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        graphQLLink
      );
    }

    return from([errorLink, preflightMiddleware, graphQLLink]);
  };

  return {
    getInstance: function () {
      if (!instance || typeof window === 'undefined') {
        instance = createInstance();
      }
      return instance;
    },

    addWsAuthToken: function (wsAuthToken: string) {
      const ins = this.getInstance();
      const link = createLink(wsAuthToken);
      ins.setLink(link);
    },
  };
})();

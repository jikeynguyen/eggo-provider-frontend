interface IEnvironmentConfig {
  [key: string]: {
    customerAppUrl: string;
    graphqlUrl: string;
    graphqlWsUrl: string;
    connectToDevTools?: boolean;
  };
}

const EnvironmentConfig: IEnvironmentConfig = {
  local: {
    customerAppUrl: 'http://localhost:3001',
    graphqlUrl: 'http://localhost:5001/graphql',
    graphqlWsUrl: 'ws://localhost:5001/graphql',
    connectToDevTools: false,
  },
  development: {
    customerAppUrl: 'https://development.choiee.com',
    graphqlUrl: 'https://development-api.choiee.com/graphql',
    graphqlWsUrl: 'wss://development-api.choiee.com/graphql',
    connectToDevTools: false,
  },
  production: {
    customerAppUrl: 'https://choiee.com',
    graphqlUrl: 'https://api.choiee.com/graphql',
    graphqlWsUrl: 'wss://api.choiee.com/graphql',
    connectToDevTools: false,
  },
};

export const getConfig = () => {
  const env = import.meta.env.VITE_ENV || 'local';

  return EnvironmentConfig[env];
};

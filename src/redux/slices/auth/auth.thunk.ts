import { bffClient } from '@/bff-client';
import { MeProviderDocument } from '@/generated';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const me = createAsyncThunk('auth/me', async () => {
  const response = await bffClient.getInstance().query({
    query: MeProviderDocument,
    fetchPolicy: 'network-only',
  });

  const me = response.data.meProvider;

  await bffClient.addWsAuthToken(me.jwt);

  return me;
});

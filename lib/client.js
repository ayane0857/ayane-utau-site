import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.serviceDomain,
    apiKey: process.env.apiKey,
});
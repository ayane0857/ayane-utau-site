import { createClient } from 'microcms-js-sdk';

if (!process.env.serviceDomain || !process.env.apiKey) {
    throw new Error("Missing serviceDomain or apiKey in environment variables");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});
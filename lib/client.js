import { createClient } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
    throw new Error("Missing serviceDomain or apiKey in environment variables");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});
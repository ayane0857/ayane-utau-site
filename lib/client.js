import { createClient } from 'microcms-js-sdk';

if (!process.env.serviceDomain || !process.env.apiKey) {
    throw new Error("Missing serviceDomain or apiKey in environment variables");
}

export const client = createClient({
    serviceDomain: process.env.serviceDomain,
    apiKey: process.env.apiKey,
});
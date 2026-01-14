// import { env } from "node:process";

interface Config {
  apiUrl: string;
  apiKey: string;
}
function env(name: string): string {
  const value = process.env[name];
  
  if (typeof value !== 'string') {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}
  
export const config: Config = {
  apiUrl: env('API_URL'),
  
  apiKey: env('API_KEY'),
};

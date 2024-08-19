import process from 'process';

import { default as MetadataConfig } from './metadata';
import { default as ViewportConfig } from './viewport';

export const APP_ENV: string = process.env.NEXT_PUBLIC_APP_ENV!;
export const DOMAIN_URL: string = process.env.NEXT_PUBLIC_DOMAIN_URL!;

export const CDN_URL: string = process.env.NEXT_PUBLIC_CDN_URL!;

// API
export const CHAIN_API: string = process.env.NEXT_PUBLIC_CHAIN_API!;
export const LIGHTNODE_API: string = process.env.NEXT_PUBLIC_LIGHTNODE_API!;

// PUBLIC URL
export const BITCOIN_EXPLORER_URL: string =
  process.env.NEXT_PUBLIC_BITCOIN_EXPLORER_URL!;

export const SUPERSONIC_EXPLORER_URL: string =
  process.env.NEXT_PUBLIC_SUPERSONIC_EXPLORER_URL!;

// DA
export const POLYGON_URL: string = process.env.NEXT_PUBLIC_POLYGON_URL!;
export const BITCOIN_MEMPOOL_URL: string =
  process.env.NEXT_PUBLIC_BITCOIN_MEMPOOL_URL!;

// Envs
export const isDevelop = APP_ENV === 'develop';
export const isStaging = APP_ENV === 'staging';
export const isProduction = APP_ENV === 'production';

export { MetadataConfig, ViewportConfig };

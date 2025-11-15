import * as esbuild from 'esbuild';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '.env') });

// Read env vars with fallbacks
const VITE_SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
const VITE_SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || '';

const define = {
  'process.env.VITE_SUPABASE_URL': `"${VITE_SUPABASE_URL}"`,
  'process.env.VITE_SUPABASE_ANON_KEY': `"${VITE_SUPABASE_ANON_KEY}"`,
};

console.log('Building with environment:');
console.log('VITE_SUPABASE_URL:', VITE_SUPABASE_URL ? '✓ Set' : '✗ Missing');
console.log('VITE_SUPABASE_ANON_KEY:', VITE_SUPABASE_ANON_KEY ? '✓ Set' : '✗ Missing');

const watch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/app.js'],
  bundle: true,
  outfile: 'public/app.js',
  platform: 'browser',
  define: {
    'process.env.VITE_SUPABASE_URL': `"${VITE_SUPABASE_URL}"`,
    'process.env.VITE_SUPABASE_ANON_KEY': `"${VITE_SUPABASE_ANON_KEY}"`,
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    'global': 'window',
  },
  inject: ['./src/process-shim.js'],
  minify: process.argv.includes('--minify'),
};

if (watch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await esbuild.build(buildOptions);
  console.log('Build complete!');
}

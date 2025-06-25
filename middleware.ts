import { routing } from './src/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(fr|en)/:path*'],
};
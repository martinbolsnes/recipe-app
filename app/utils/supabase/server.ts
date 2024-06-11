import { type NextRequest, type NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// server component can only get cookies and not set them, hence the "component" check
export function createSupabaseServerClient(component: boolean = false) {
  cookies().getAll();
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return getCookie(name, { cookies });
      },
      set(name: string, value: string, options: CookieOptions) {
        if (component) return;
        setCookie(name, value, { cookies, ...options });
      },
      remove(name: string, options: CookieOptions) {
        if (component) return;
        deleteCookie(name, { cookies, ...options });
      },
    },
  });
}

export function createSupabaseServerComponentClient() {
  cookies().getAll();
  return createSupabaseServerClient(true);
}

export function createSupabaseReqResClient(
  req: NextRequest,
  res: NextResponse
) {
  cookies().getAll();
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return getCookie(name, { req, res });
      },
      set(name: string, value: string, options: CookieOptions) {
        setCookie(name, value, { req, res, ...options });
      },
      remove(name: string, options: CookieOptions) {
        setCookie(name, '', { req, res, ...options });
      },
    },
  });
}

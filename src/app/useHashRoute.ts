import { useState, useEffect, useCallback } from 'react';

export interface RouteState {
  path: string; // '/' or '/aad'
  anchor: string; // e.g. 'laws', 'rage-cycle', or ''
}

function parseHash(hash: string): RouteState {
  // Normalize hash, e.g. '#/aad#laws', '#/aad', '#/the-lab', '#laws', ''
  const clean = hash.replace(/^#/, '');

  if (!clean || clean === '/' || clean === '/home') {
    return { path: '/', anchor: '' };
  }

  // Check if hash starts with /aad
  if (clean.startsWith('/aad')) {
    const parts = clean.split('#');
    return {
      path: '/aad',
      anchor: parts[1] || ''
    };
  }

  // If hash is just an anchor on the current page, e.g. #the-lab or #methodology
  if (clean.startsWith('/')) {
    const parts = clean.split('#');
    return {
      path: parts[0] || '/',
      anchor: parts[1] || ''
    };
  }

  // Bare anchor like #methodology or #laws or #the-lab
  return {
    path: clean === 'the-lab' || clean === 'principles' || clean === 'what-we-do' ? '/' : '/aad',
    anchor: clean
  };
}

export function useHashRoute() {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === 'undefined') return { path: '/', anchor: '' };
    return parseHash(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);

      if (newRoute.anchor) {
        // Small delay to ensure DOM is rendered
        setTimeout(() => {
          const el = document.getElementById(newRoute.anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        // If navigated to page root, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial anchor scroll check if loaded with an anchor
    if (route.anchor) {
      setTimeout(() => {
        const el = document.getElementById(route.anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [route.anchor]);

  const navigate = useCallback((target: string) => {
    // Normalizes navigate('/aad') or navigate('/aad#laws') or navigate('/')
    let normalized = target;
    if (!target.startsWith('#')) {
      if (target.startsWith('/')) {
        normalized = '#' + target;
      } else {
        normalized = '#/' + target;
      }
    }
    window.location.hash = normalized;
  }, []);

  return {
    path: route.path,
    anchor: route.anchor,
    navigate,
    isHome: route.path === '/' || route.path === '',
    isAad: route.path === '/aad'
  };
}

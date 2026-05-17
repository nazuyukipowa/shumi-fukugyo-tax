'use client';

import { useEffect } from 'react';

type Gtag = (...args: unknown[]) => void;

/**
 * Fires a GA4 `affiliate_click` event whenever a link marked with
 * rel="sponsored" is clicked. Uses event delegation so existing
 * affiliate components (AffiliateSection, ZeirishiCallout) need no changes.
 */
export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a[rel~="sponsored"]') as
        | HTMLAnchorElement
        | null;
      if (!link) return;

      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag !== 'function') return;

      let linkDomain = '';
      try {
        linkDomain = new URL(link.href).hostname;
      } catch {
        linkDomain = '';
      }

      gtag('event', 'affiliate_click', {
        link_url: link.href,
        link_text: (link.textContent ?? '').trim().slice(0, 100),
        link_domain: linkDomain,
        page_location: window.location.href,
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () =>
      document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}

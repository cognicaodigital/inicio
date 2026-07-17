import { useEffect } from 'react';

export function usePageSEO(title, description) {
  useEffect(() => {
    document.title = `${title} | Cognição Digital`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
import { useState, useEffect } from 'react';

/**
 * Hook to track the active section in view and whether page has scrolled
 * @param {string[]} sectionIds Array of element IDs to track
 * @param {number} offset Top offset margin for intersection threshold
 */
export function useScrollSpy(sectionIds = [], offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return { activeSection, hasScrolled };
}

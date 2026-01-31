import { useEffect, useRef, RefObject } from 'react';

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      // Observe the container and all children with scroll-animate classes
      const animatedElements = element.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
      animatedElements.forEach((el) => observer.observe(el));
      
      // Also observe the container itself if it has the class
      if (element.classList.contains('scroll-animate') || 
          element.classList.contains('scroll-animate-left') || 
          element.classList.contains('scroll-animate-right')) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useMultipleScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

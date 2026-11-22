import React from 'react';
import { useReveal, useRevealStagger } from '../hooks/useReveal';

type RevealTag = 'div' | 'section' | 'article' | 'li' | 'ul' | 'ol' | 'p' | 'h1' | 'h2' | 'blockquote';

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
};

export function Reveal({ as = 'div', children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return React.createElement(as, { ...rest, ref, 'data-reveal': true }, children);
}

export function RevealStagger({ as = 'div', children, ...rest }: RevealProps) {
  const ref = useRevealStagger<HTMLElement>();
  return React.createElement(as, { ...rest, ref, 'data-reveal-stagger': true }, children);
}

declare module 'react-typed' {
    import * as React from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      cursorChar?: string;
      className?: string;
      style?: React.CSSProperties;
    }
  
    const Typed: React.FC<TypedProps>;
    export default Typed;
  }
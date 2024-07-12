import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface LinkProps extends Omit<NextLinkProps, 'href'> {
  href?: string;
  children: ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  console.log(children);
  return (
    <NextLink href={href || ''} passHref legacyBehavior>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

import { HTMLProps, ReactNode } from 'react';
import classnames from 'classnames';

import css from './Card.module.css';

export interface IProps {
  children: ReactNode;
  hover?: 'on' | 'off';
  disabled?: boolean;
  className?: string;
}

export const Card = ({
  hover = 'on',
  disabled,
  className,
  children,
  ...props
}: IProps & HTMLProps<HTMLDivElement>) => (
  <div
    className={classnames(
      css.host,
      {
        [css.noHover]: hover === 'off',
        [css.disabled]: disabled,
      },
      className
    )}
    {...props}
  >
    {children}
  </div>
);

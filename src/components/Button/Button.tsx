import { ReactNode, MouseEvent, forwardRef } from 'react';
import classnames from 'classnames';
import { LoaderIcon } from '../Icons/LoaderIcon';
import { IDataAttributes } from '../../types/shared';

import css from './Button.module.css';

export interface IProps extends IDataAttributes {
  type?: 'button' | 'submit' | 'reset';
  fill?: 'primary' | 'secondary' | 'tertiary';
  size?: 'medium' | 'small';
  disabled?: boolean;
  presentational?: boolean;
  loading?: boolean;
  className?: string;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  onClick?: (event: MouseEvent) => void;
  children: ReactNode;
}

export const Button = forwardRef(
  (
    {
      type = 'button',
      fill = 'primary',
      size = 'medium',
      disabled,
      presentational = false,
      loading,
      className,
      icon,
      iconAlign = 'left',
      onClick,
      children,
      ...dataProps
    }: IProps,
    ref
  ) => {
    const hostClassNames = classnames(
      css.host,
      css[fill],
      css[size],
      className,
      {
        [css.loading]: loading,
      }
    );
    const parent = presentational ? (
      <div />
    ) : (
      <button type={type} onClick={onClick} />
    );

    const IconComponent = icon ? (
      <icon.type
        className={classnames(css.icon, css[iconAlign])}
        {...icon.props}
      />
    ) : null;

    return (
      <parent.type
        className={hostClassNames}
        disabled={loading || disabled}
        {...parent.props}
        {...dataProps}
        ref={ref}
      >
        {loading && <LoaderIcon className={css.loaderIcon} />}
        <span className={css.content}>
          {iconAlign === 'left' && IconComponent}
          {children}
          {iconAlign === 'right' && IconComponent}
        </span>
      </parent.type>
    );
  }
);

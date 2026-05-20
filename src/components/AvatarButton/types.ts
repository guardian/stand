import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { AvatarProps } from '../Avatar/types';

export type AvatarButtonProps = AvatarProps & Omit<RACButtonProps, 'children'>;

import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { AvatarProps } from '../avatar/types';

export type AvatarButtonProps = AvatarProps & Omit<RACButtonProps, 'children'>;

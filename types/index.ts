import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface ContainerProps {
  children: React.ReactNode;
}

export interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export interface ClientOnlyProps {
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  disable?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

// interface store zustand
export interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

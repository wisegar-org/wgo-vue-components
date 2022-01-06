export interface IWGODialogOptions {
  open: boolean;
  onClose: () => unknown;
  title?: string;
  icon?: string;
  height?: string;
  width?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  hideButtons?: boolean;
  cancelText?: string;
  acceptText?: string;
  styleDialog?: string;
  onCancel?: () => unknown;
  onAccept?: () => unknown;
  afterResize?: (resize: number) => unknown;
}

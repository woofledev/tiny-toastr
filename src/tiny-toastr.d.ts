interface ToastOptions {
  /** toast content */
  text: string;
  /** toast duration in ms */
  time?: number;
  /** whether or not to add a close button */
  closable?: boolean;
  /** css animation style to apply to the toast */
  animation?: string;

  /** html attributes to set */
  attrs?: Patrial<Record<keyof HTMLElement, string>>;
  /** css styles to set */
  css?: CSSStyleDeclaration;
}


/** Creates a new toast */
declare const tinytoast: (options?: ToastOptions) => HTMLDivElement;
/**
 * Allows you to stack toasts on top of eachother
 * @param {HTMLDivElement} toast the toast element to stack
 */
export declare const stack: (toast: HTMLDivElement) => void;
export default tinytoast;
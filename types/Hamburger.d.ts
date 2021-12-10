/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface HamburgerProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
  duoLine?: boolean;

  class?: string;
}

export default class Hamburger extends SvelteComponentTyped<
  HamburgerProps,
  { click: MouseEvent; keydown: KeyboardEvent; keypress: KeyboardEvent },
  {}
> {}

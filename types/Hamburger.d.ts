/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HamburgerProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
   duoLine?: boolean;
}

export default class Hamburger extends SvelteComponentTyped<HamburgerProps, {}, {}> {}

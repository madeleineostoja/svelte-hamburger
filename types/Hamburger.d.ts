/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HamburgerProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default 32
   */
  width?: number;

  /**
   * @default 24
   */
  height?: number;

  /**
   * @default 2
   */
  stroke?: number;
}

export default class Hamburger extends SvelteComponentTyped<HamburgerProps, {}, {}> {}

/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface StructuredListSkeletonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Specify the number of rows
   * @default 5
   */
  rows?: number;

  /**
   * Set to `true` to use the bordered variant
   * @default false
   */
  border?: boolean;
}

export default class StructuredListSkeleton extends SvelteComponentTyped<
  StructuredListSkeletonProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
  },
  {}
> {}

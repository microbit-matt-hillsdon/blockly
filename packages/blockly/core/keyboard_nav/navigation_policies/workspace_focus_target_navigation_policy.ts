/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type {IFocusableNode} from '../../interfaces/i_focusable_node.js';
import type {INavigationPolicy} from '../../interfaces/i_navigation_policy.js';
import {WorkspaceFocusTarget} from '../../workspace_focus_target.js';

/**
 * Set of rules controlling keyboard navigation from the workspace focus target.
 *
 * The focus target represents the workspace as a whole (reached via the focus
 * workspace shortcut or when first entering the workspace), so navigating into
 * it should mirror navigating into the workspace itself.
 */
export class WorkspaceFocusTargetNavigationPolicy implements INavigationPolicy<WorkspaceFocusTarget> {
  /**
   * Returns the first child of the focus target's workspace.
   *
   * @param current The focus target to return the first child of.
   * @returns The top block of the first block stack, if any.
   */
  getFirstChild(current: WorkspaceFocusTarget): IFocusableNode | null {
    const blocks = current.getWorkspace().getTopBlocks(true);
    return blocks.length ? blocks[0] : null;
  }

  /**
   * Returns the parent of the given focus target.
   *
   * @param _current The focus target to return the parent of.
   * @returns Null.
   */
  getParent(_current: WorkspaceFocusTarget): IFocusableNode | null {
    return null;
  }

  /**
   * Returns the next sibling of the given focus target.
   *
   * @param _current The focus target to return the next sibling of.
   * @returns Null.
   */
  getNextSibling(_current: WorkspaceFocusTarget): IFocusableNode | null {
    return null;
  }

  /**
   * Returns the previous sibling of the given focus target.
   *
   * @param _current The focus target to return the previous sibling of.
   * @returns Null.
   */
  getPreviousSibling(_current: WorkspaceFocusTarget): IFocusableNode | null {
    return null;
  }

  /**
   * Returns the row ID of the given focus target.
   *
   * @param current The focus target to retrieve the row ID of.
   * @returns The row ID of the focus target's workspace.
   */
  getRowId(current: WorkspaceFocusTarget): string {
    return current.getWorkspace().id;
  }

  /**
   * Returns whether or not the given focus target can be navigated to.
   *
   * @param current The instance to check for navigability.
   * @returns True if the given focus target can be focused.
   */
  isNavigable(current: WorkspaceFocusTarget): boolean {
    return current.canBeFocused();
  }

  /**
   * Returns whether the given object can be navigated from by this policy.
   *
   * @param current The object to check if this policy applies to.
   * @returns True if the object is a WorkspaceFocusTarget.
   */
  isApplicable(current: any): current is WorkspaceFocusTarget {
    return current instanceof WorkspaceFocusTarget;
  }
}

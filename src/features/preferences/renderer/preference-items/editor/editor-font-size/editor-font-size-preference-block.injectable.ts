/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { preferenceItemInjectionToken } from "@lensapp/preferences";
import { getInjectable } from "@ogre-tools/injectable";
import { EditorFontSize } from "./editor-font-size";

const editorFontSizePreferenceBlockInjectable = getInjectable({
  id: "editor-font-size-preference-item",

  instantiate: () => ({
    kind: "block" as const,
    id: "editor-font-size",
    parentId: "editor-page",
    orderNumber: 40,
    Component: EditorFontSize,
  }),

  injectionToken: preferenceItemInjectionToken,
});

export default editorFontSizePreferenceBlockInjectable;

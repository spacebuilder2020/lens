/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { preferenceItemInjectionToken } from "@lensapp/preferences";
import { getInjectable } from "@ogre-tools/injectable";
import { EditorFontFamily } from "./editor-font-family";

const editorFontFamilyPreferenceBlockInjectable = getInjectable({
  id: "editor-font-family-preference-item",

  instantiate: () => ({
    kind: "block" as const,
    id: "editor-font-family",
    parentId: "editor-page",
    orderNumber: 50,
    Component: EditorFontFamily,
  }),

  injectionToken: preferenceItemInjectionToken,
});

export default editorFontFamilyPreferenceBlockInjectable;

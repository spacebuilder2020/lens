/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { preferenceItemInjectionToken } from "@lensapp/preferences";
import { getInjectable } from "@ogre-tools/injectable";
import { TabSize } from "./tab-size";

const tabSizePreferenceBlockInjectable = getInjectable({
  id: "tab-size-preference-item",

  instantiate: () => ({
    kind: "block" as const,
    id: "tab-size",
    parentId: "editor-page",
    orderNumber: 30,
    Component: TabSize,
  }),

  injectionToken: preferenceItemInjectionToken,
});

export default tabSizePreferenceBlockInjectable;

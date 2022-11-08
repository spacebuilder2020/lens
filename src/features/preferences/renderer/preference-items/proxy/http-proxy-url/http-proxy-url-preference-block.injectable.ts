/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { preferenceItemInjectionToken } from "@lensapp/preferences";
import { getInjectable } from "@ogre-tools/injectable";
import { HttpProxyUrl } from "./http-proxy-url";

const httpProxyUrlPreferenceBlockInjectable = getInjectable({
  id: "http-proxy-url-preference-item",

  instantiate: () => ({
    kind: "block" as const,
    id: "http-proxy-url",
    parentId: "proxy-page",
    orderNumber: 10,
    Component: HttpProxyUrl,
  }),

  injectionToken: preferenceItemInjectionToken,
});

export default httpProxyUrlPreferenceBlockInjectable;

/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { preferenceItemInjectionToken } from "@lensapp/preferences";
import { getInjectable } from "@ogre-tools/injectable";
import { HelmCharts } from "./helm-charts";

const helmChartsPreferenceBlockInjectable = getInjectable({
  id: "helm-charts-preference-block",

  instantiate: () => ({
    kind: "block" as const,
    id: "helm-charts",
    parentId: "kubernetes-page",
    orderNumber: 30,
    Component: HelmCharts,
  }),

  injectionToken: preferenceItemInjectionToken,
});

export default helmChartsPreferenceBlockInjectable;

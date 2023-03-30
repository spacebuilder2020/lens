import { getInjectable } from "@ogre-tools/injectable";
import dockStoreInjectable from "./store.injectable";
import type { DockTab, DockTabCreate } from "./store";

const createDockTabInjectable = getInjectable({
  id: "create-dock-tab",

  instantiate: (di) => {
    const dockStore = di.inject(dockStoreInjectable);

    return (rawTabDesc: DockTabCreate, addNumber?: boolean): DockTab =>
      dockStore.createTab(rawTabDesc, addNumber);
  },
});

export default createDockTabInjectable;

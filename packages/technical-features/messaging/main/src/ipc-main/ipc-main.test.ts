import { createContainer, DiContainer } from "@ogre-tools/injectable";
import { registerFeature } from "@k8slens/feature-core";
import ipcMainInjectable from "./ipc-main.injectable";
import { ipcMain } from "electron";
import { feature } from "../feature";

describe("ipc-main", () => {
  let di: DiContainer;

  beforeEach(() => {
    di = createContainer("irrelevant");

    registerFeature(di, feature);
  });

  it("is the actual IPC-main of Electron", () => {
    const actual = di.inject(ipcMainInjectable);

    expect(actual).toBe(ipcMain);
  });
});

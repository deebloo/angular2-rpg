/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import {GameTileMap} from '../../gameTileMap';

export class CombatCameraComponent extends pow2.scene.components.CameraComponent {
  host:GameTileMap;

  connectComponent():boolean {
    return super.connectComponent() && this.host instanceof GameTileMap;
  }

  process(view:pow2.scene.SceneView) {
    if (!this.host) {
      super.process(view);
      return;
    }
    view.cameraScale = view.context.canvas.width > 768 ? 4 : 2;
    view.camera = view.screenToWorld(new pow2.Rect(0, 0, view.context.canvas.width, view.context.canvas.height), view.cameraScale);
    view.camera.point.x = (this.host.bounds.extent.x / 2) - (view.camera.extent.x / 2);
  }
}
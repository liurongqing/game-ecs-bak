export class Game {
  private _systems: any[];
  private _entities: any[];

  constructor() {
    this._systems = [];
    this._entities = [];
  }

  /**
   * 在该世界添加一个系统
   * @param system 系统实例
   */
  addSystem(system: any) {
    this._systems.push(system);
    system.addToWorld(this);
  }

  /**
   * 从该世界移除一个系统
   * @param system 系统实例
   */
  removeSystem(system: any) {
    const systems = this._systems;
    for (let i = 0; i < systems.length; i++) {
      if (systems[i] === system) {
        system.splice(i, 1);
        system.removeFromWorld(this);
      }
    }
  }

  addEntity(entity: any) {
    for (let key in entity._components) {
      const component = entity._components[key];
      if (!component) continue;
    }
    this._entities.push(entity);
  }

  update(dt: number) {
    for (let i = 0; i < this._systems.length; i++) {
      this._systems[i].update(dt);
    }
  }
}

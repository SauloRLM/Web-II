import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ElectronWindow, WINDOW } from './window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  constructor(@Inject(WINDOW) private window: ElectronWindow) { }
  private get ipcRender(): Electron.IpcRenderer{
    return this.window.require('electron').ipcRender;
  }
  getContent(): Promise<string>{
    return this.ipcRender.invoke('getContent');
  }
  setContent(content: string){
    this.ipcRender.invoke('setContent', content);
  }
}

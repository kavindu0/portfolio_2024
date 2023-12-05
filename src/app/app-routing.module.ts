import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JsComponent} from "./components/js/js.component";
import {V8engineComponent} from "./components/js/v8engine/v8engine.component";
import {V8engineContComponent} from "./components/js/v8engine/v8engine-cont/v8engine-cont.component";
import {CanvasComponent} from "./components/js/canvas/canvas.component";
import {CanvasContComponent} from "./components/js/canvas/canvas-cont/canvas-cont.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'js', component: JsComponent, children:[
      {path: '', redirectTo: '/v8engine', pathMatch: 'full'},
      {path: 'v8engine', component: V8engineComponent, children:[
        {path: '', component: V8engineContComponent}
      ]},
      {path: 'canvas', component: CanvasComponent, children:[
        {path: '', component: CanvasContComponent}
      ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JsComponent} from "./components/js/js.component";
import {V8engineComponent} from "./components/js/v8engine/v8engine.component";
import {V8engineContComponent} from "./components/js/v8engine/v8engine-cont/v8engine-cont.component";
import {CanvasComponent} from "./components/js/canvas/canvas.component";
import {CanvasContComponent} from "./components/js/canvas/canvas-cont/canvas-cont.component";
import {WaveSimulationComponent} from "./components/js/wave-simulation/wave-simulation.component";
import {
  WaveSimulationContComponent
} from "./components/js/wave-simulation/wave-simulation-cont/wave-simulation-cont.component";
import {PythonComponent} from "./components/python/python.component";
import {GeographicAnalysisComponent} from "./components/python/geographic-analysis/geographic-analysis.component";
import {
  GeographicAnalysisContComponent
} from "./components/python/geographic-analysis/geographic-analysis-cont/geographic-analysis-cont.component";
import {CssComponent} from "./components/css/css.component";
import {CssVsScssComponent} from "./components/css/css-vs-scss/css-vs-scss.component";
import {CssVsScssContComponent} from "./components/css/css-vs-scss/css-vs-scss-cont/css-vs-scss-cont.component";
import {MlComponent} from "./components/python/ml/ml.component";
import {MlContComponent} from "./components/python/ml/ml-cont/ml-cont.component";
import {
  SupervisedLearningComponent
} from "./components/python/ml/ml-cont/supervised-learning/supervised-learning.component";
import {
  UnsupervisedLearningComponent
} from "./components/python/ml/ml-cont/unsupervised-learning/unsupervised-learning.component";
import {
  ReinforcementLearningComponent
} from "./components/python/ml/ml-cont/reinforcement-learning/reinforcement-learning.component";
import {FluidSimulationComponent} from "./components/js/fluid-simulation/fluid-simulation.component";
import {
  FluidSimulationContComponent
} from "./components/js/fluid-simulation/fluid-simulation-cont/fluid-simulation-cont.component";
import {WhyJsComponent} from "./components/js/why-js/why-js.component";
import {WhyJsContComponent} from "./components/js/why-js/why-js-cont/why-js-cont.component";
import {CssVarComponent} from "./components/css/css-var/css-var.component";
import {CssVarContComponent} from "./components/css/css-var/css-var-cont/css-var-cont.component";
import {SoftwareComponent} from "./components/software/software.component";
import {QgisComponent} from "./components/software/qgis/qgis.component";
import {QgisContComponent} from "./components/software/qgis/qgis-cont/qgis-cont.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'js', component: JsComponent, children:[
      {path: '', redirectTo: '/v8engine', pathMatch: 'full'},
      {path: 'v8engine', component: V8engineComponent, children:[
        {path: '', component: V8engineContComponent}
      ]},
      {path: 'canvas', component: CanvasComponent, children:[
        {path: '', component: CanvasContComponent}
      ]},
      {path: 'wave', component: WaveSimulationComponent, children:[
          {path: '', component: WaveSimulationContComponent}
      ]},
      {path: 'fluid', component: FluidSimulationComponent, children:[
          {path: '', component: FluidSimulationContComponent}
      ]},
      {path: 'why-js', component: WhyJsComponent, children:[
          {path: '', component: WhyJsContComponent}
      ]}
    ]},
  { path: 'python', component: PythonComponent, children:[
      {path: '', redirectTo: '/geographic-analysis', pathMatch: 'full'},
      {path: 'geographic-analysis', component: GeographicAnalysisComponent, children:[
          {path: '', component: GeographicAnalysisContComponent}
      ]},
      {path: 'machine-learning', component: MlComponent, children:[
          {path: '', component: MlContComponent},
          {path: 'supervised-learning', component: SupervisedLearningComponent},
          {path: 'unsupervised-learning', component: UnsupervisedLearningComponent},
          {path: 'reinforcement-learning', component: ReinforcementLearningComponent}
      ]}
  ]},
  { path: 'css', component: CssComponent, children:[
      {path: '', redirectTo: '/css-vs-scss', pathMatch: 'full'},
      {path: 'css-vs-scss', component: CssVsScssComponent, children:[
          {path: '', component: CssVsScssContComponent}
      ]},
      {path: 'var', component: CssVarComponent, children:[
          {path: '', component: CssVarContComponent}
      ]}
  ]},
  { path: 'software', component:SoftwareComponent, children:[
      {path: '', redirectTo: '/qgis', pathMatch: 'full'},
      {path: 'qgis', component: QgisComponent, children:[
          {path: '', component: QgisContComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

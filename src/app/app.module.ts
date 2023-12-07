import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JsComponent } from './components/js/js.component';
import { V8engineComponent } from './components/js/v8engine/v8engine.component';
import { V8engineContComponent } from './components/js/v8engine/v8engine-cont/v8engine-cont.component';
import { CanvasComponent } from './components/js/canvas/canvas.component';
import { CanvasContComponent } from './components/js/canvas/canvas-cont/canvas-cont.component';
import { WaveSimulationComponent } from './components/js/wave-simulation/wave-simulation.component';
import { WaveSimulationContComponent } from './components/js/wave-simulation/wave-simulation-cont/wave-simulation-cont.component';
import { PythonComponent } from './components/python/python.component';
import { GeographicAnalysisComponent } from './components/python/geographic-analysis/geographic-analysis.component';
import { GeographicAnalysisContComponent } from './components/python/geographic-analysis/geographic-analysis-cont/geographic-analysis-cont.component';
import { CssComponent } from './components/css/css.component';
import { CssVsScssComponent } from './components/css/css-vs-scss/css-vs-scss.component';
import { CssVsScssContComponent } from './components/css/css-vs-scss/css-vs-scss-cont/css-vs-scss-cont.component';
import { MlComponent } from './components/python/ml/ml.component';
import { MlContComponent } from './components/python/ml/ml-cont/ml-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsComponent,
    V8engineComponent,
    V8engineContComponent,
    CanvasComponent,
    CanvasContComponent,
    WaveSimulationComponent,
    WaveSimulationContComponent,
    PythonComponent,
    GeographicAnalysisComponent,
    GeographicAnalysisContComponent,
    CssComponent,
    CssVsScssComponent,
    CssVsScssContComponent,
    MlComponent,
    MlContComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

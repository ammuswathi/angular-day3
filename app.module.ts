import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KomaliComponent } from './komali.component';
import { GridComponent } from './grid.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    //AppComponent,
    //KomaliComponent
    MainComponent,GridComponent,HeaderComponent
  ],
  imports: [BrowserModule,FormsModule ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

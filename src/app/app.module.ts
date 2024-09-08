import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {SeWebModule} from '@se/web-ui-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SubHeaderComponent} from "./header/sub-header/sub-header.component";
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {TeamState} from "./store/states/team.state";
import {TeamsFormComponent} from "./team/teams-form/teams-form.component";
import {TeamsDetailsViewComponent} from "./team/teams-details-view/teams-details-view.component";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    SubHeaderComponent,
    TeamsFormComponent,
    TeamsDetailsViewComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SeWebModule.forRoot(),
    BrowserAnimationsModule,
    NgxsModule.forRoot([TeamState]),
    NgxsLoggerPluginModule.forRoot({disabled: false}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [SeWebModule]
})
export class AppModule {

}

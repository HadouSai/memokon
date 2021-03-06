import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyZoneComponent } from './my-zone.component';
import { MyZoneRouting } from './my-zone.routing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { NewDocsModule } from '../docs/new-docs/new-docs.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InputModule } from '../utils/input/input.module';
import { NotesModule } from '../notes/notes.module';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterModule } from '../footer/footer.module';
@NgModule({
  declarations: [
    MyZoneComponent,
    SearchBarComponent,
    AsideNavComponent
  ],
  imports: [
    CommonModule,
    MyZoneRouting,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatInputModule,
    MatRippleModule,
    NewDocsModule,
    InputModule,
    NotesModule,
    MatSlideToggleModule,
    FooterModule
  ]
})
export class MyZoneModule { }

import { NgModule } from '@angular/core';

import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
   imports: [
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule
   ],
   exports: [
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule
   ]   
})
export class AngularMaterialModule { }

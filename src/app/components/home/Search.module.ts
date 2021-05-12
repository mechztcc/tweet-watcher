import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { MainComponent } from './pages/main/main.component';
import { FormSearchComponent } from './components/form-search/form-search.component';




@NgModule({
  declarations: [
    MainComponent,
    FormSearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    
  ]
})
export class SearchModule { }

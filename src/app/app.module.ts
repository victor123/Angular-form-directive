import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceData } from './services/main.service';
// import {newComponent} from './shopping/shopping-list/necom.component';
import { HeaderSection} from './header/header';
import {Recipe} from './recipe/recipe-list/recipe-list';
import {Shoping} from './shopping/shoping-edit/shoping';
// import {RecipeDetail} from './recipe/recipeDetail/recipeDetail';
import {RecipeItem} from './recipe/recipe-item/recipe-item'
import { simpleDirective } from './diective/app.directive';
import { dropDownDirective } from './diective/dropDown.directive';
import { Service1 } from './services/service1';
import { ComponentFirst } from './shareData/component.First';
import { ComponentSecond } from './shareData/component.Second';
import { ShareDataService } from './shareData/dataShare.service';
import { RoutesModule,routerComponent } from './app.router';
import { SortenPipe } from './pipe/textLength';
import { filterTrp } from './pipe/filter.grid';
import { formTemplate } from './TD-form/TD.form';
import { FormService } from './TD-form/formService';
import { FormGrid } from './TD-form/formgrid';
import { ReactiveFormList } from './reactive-form/reactive-form';
import { FormArrayList } from './formArray/formArray';


@NgModule({
  declarations: [
    AppComponent,
    //newComponent,
    HeaderSection,
    Recipe,
    Shoping,
    //RecipeDetail,
    routerComponent,
    RecipeItem,
    simpleDirective,
    dropDownDirective,
    ComponentFirst,
    ComponentSecond,
    SortenPipe,
    filterTrp,
    formTemplate,
    FormGrid,
    ReactiveFormList,
    FormArrayList

  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [ServiceData,Service1,ShareDataService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

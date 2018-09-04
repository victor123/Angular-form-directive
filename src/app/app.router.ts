import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Shoping } from './shopping/shoping-edit/shoping';
import { RecipeDetail } from './recipe/recipeDetail/recipeDetail';
import { newComponent } from './shopping/shopping-list/necom.component';
import { RouterList } from './router-params/router.dataList';
import { RouterParams } from './router-params/router-param';

const routes:Routes = [
    {path: '' , redirectTo:'shopping', pathMatch:'full'},
    {path:'listParams', component:RouterParams},
    {path:'listParams/:id', component:RouterList},
    {path:'recipe', component:newComponent},
    {path:'shopping', component: RecipeDetail}
]

@NgModule({
 imports:[
     RouterModule.forRoot(routes)
 ],
 exports:[RouterModule]
})

export class RoutesModule {}
export const routerComponent = [RecipeDetail,newComponent,RouterList,RouterParams]
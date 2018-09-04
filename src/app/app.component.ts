import { Component, ViewChild } from '@angular/core';
import { RecipeDetail} from './recipe/recipeDetail/recipeDetail';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = '1'
 loadData:string ='recipe';
 @ViewChild(RecipeDetail)
  private child: RecipeDetail
  title = 'app';

  changeData(){
    this.child.Description='assasasass'
    this.child.Ingridents='sasasasasas'
  }
 
  navigation(feature:string) {
    this.loadData = feature;
    console.log('parent',this.loadData )
  }
}

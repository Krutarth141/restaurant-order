import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SearchComponent } from '../search/search.component';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component"; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, TagsComponent, RouterModule, NotFoundComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  searchItem: string = ''; 
  constructor(private fs: FoodService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      else
        this.foods = this.fs.getAll();
    })
  }
}

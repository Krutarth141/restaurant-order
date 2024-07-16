import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../shared/models/tag';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'center';
  tags?:Tag[] = [];
  constructor(private fs:FoodService) { }
  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.fs.getAllTag();
  }
}

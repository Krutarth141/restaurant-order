import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search/:searchItem', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodpageComponent },
    { path: 'cart-page', component: CartPageComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes),CommonModule, FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

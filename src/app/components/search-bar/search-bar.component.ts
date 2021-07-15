import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="search-container">
      <form class="search-form" #form="ngForm" (ngSubmit)="onSubmit(form)">
        <span class="logo" routerLink="/">NgVgDB</span>
        <input 
          class="search-input"
          name="search"
          ngModel
          placeholder="Search game"
        />
        <button class="search-button">Search</button>
      </form>
    </div>
  `,
  styles: [`
    .search {
      &-container {
        width: 100%;
        height: 60px;
        background-color: #323a45;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
      }
      &-form {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
      &-input {
        margin-left: 10px;
        padding: 10px;
        width: 300px;
        outline: none;
        border: none;
        border-radius: 5px 0 0 5px;
      }
      &-button {
        border: none;
        outline: none;
        background: #3f51b5;
        padding: 10px;
        border-left: 1px solid black;
        border-radius: 0 5px 5px 0;
        color: #FFF;
        font-weight: 700;
        transition-duration: 0.3s;
        cursor: pointer;

        &:hover {
          color: #3f51b5;
          background-color: #fff;
          border: 1px solid #3f51b5;
        }
      }
    }
    .logo {
      margin-left: 10px;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
    }
  `]
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search])
  }
}

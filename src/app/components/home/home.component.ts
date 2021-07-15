import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="filters">
      <mat-form-field>
        <mat-label>sort</mat-label>
        <mat-select
          panelClass="sort-select"
          [(ngModel)]="sort"
        >
          <mat-option value="name">Name</mat-option>
          <mat-option value="-released">Released</mat-option>
          <mat-option value="-added">Added</mat-option>
          <mat-option value="-created">Created</mat-option>
          <mat-option value="-updated">Updated</mat-option>
          <mat-option value="-rating">Rating</mat-option>
          <mat-option value="metacritic">Metacritic</mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <div class="games">
      <div class="game">
        <div class="game-thumb-container">
          <img class="game-thumbnail" src="" alt="thumbnail"/>
        </div>
        <div class="game-description">
          <p class="game-name">Name</p>
          <div class="game-platforms">
            <img class="game-platform" src="" alt="slug"/>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .filters {
      max-width: 1200px;
      margin: 20px auto;
      padding-left: 20px;
    }
    ::ng-deep {
      .mat-form-field-infix {
        background-color: #3f51b5;
      }
      .mat-select-value,
      .mat-select-arrow,
      .mat-form-field-hide-placeholder mat-select-placeholder,
      .mat-form-field-appearance-legacy .mat-form-field-label {
        color: #fff !important;
        opacity: 1;
      }
      .mat-form-field-infix {
        border-color: #fff !important;
        border-top: none;
        padding-left: 5px !important;
      }
      .mat-form-field-appearance-legacy .mat-form-field-label {
        padding-left: 5px;
      }
    }
    .games {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 20px auto;
    }
    .game {
      width: 280px;
      margin: 10px;
      height: 330px;
      overflow: hidden;
      border-radius: 5px;
      background-color: #202020;
      box-shadow: 4px 3px 8px 0px rgb(200 152 44);
      transition-duration: 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 4px 3px 11px 6px rgb(200 152 44);
        transform: translateY(-3px);
      }
      &-thumb-container {
        background-color: black;
        position: relative;
        height: 172px;
        color: #fff;
        text-align: center;
      }
      &-thumbnail {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 172px;
      }
      &-description {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 157px;
      }
      &-name {
        color: #FFF;
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &-platforms {
        display: flex;
      }
      &-platform {
        width: 20px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  public sort: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

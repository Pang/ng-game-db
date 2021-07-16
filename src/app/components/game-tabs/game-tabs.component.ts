import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  template: `
    <div class="game-tabs" *ngIf="game != undefined; else isLoading">
      <mat-tab-group mat-align-tabs="start" backgroundColor="primary">
        <mat-tab label="About">
          <p *ngIf="game?.parent_platforms?.length" class="game-tabs-par">
            Platforms:
            <span *ngFor="let game of game?.parent_platforms; let last = last">
              {{ game?.platform.name }}<span *ngIf="!last">, </span>
            </span>
          </p>
          <p *ngIf="game?.publishers?.length" class="game-tabs-par">
            Publishers:
            <span *ngFor="let publisher of game?.publishers; let last = last">
              {{ publisher?.name }}<span *ngIf="!last">, </span>
            </span>
          </p>
          <p class="game-tabs-par">
            Website:
            <a class="game-tabs-llink" href="{{ game?.website }}" target="_blank">{{ game?.website }}</a>
          </p>
          <div class="game-description" [innerHTML]="game?.description"></div>
          <p class="game-tabs-votes">
            <ng-container *ngFor="let rating of game?.ratings">
              <span *ngIf="rating?.title === 'exceptional'">
                <mat-icon class="game-votes-up">thumb_up</mat-icon>
                <span class="game-votes-count">{{ rating?.count || 0 }}</span>
              </span>
              <span *ngIf="rating?.title === 'skip'">
                <mat-icon class="game-votes-down">thumb_down</mat-icon>
                <span class="game-votes-count">{{ rating?.count || 0 }}</span>
              </span>
            </ng-container>
          </p>
        </mat-tab>
        <mat-tab label="Screenshots" *ngIf="game?.screenshots?.length">
          <img
            class="game-screenshot"
            *ngFor="let screenshot of game?.screenshots"
            src="{{ screenshot.image }}"
            alt="screenshot"
          />
        </mat-tab>
        <mat-tab label="Trailers" *ngIf="game?.trailers?.length">
          <video
            class="game-trailer"
            controls
            *ngFor="let trailer of game?.trailers"
          >
            <source src="{{ trailer?.data?.max }}" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </mat-tab>
      </mat-tab-group>
    </div>
    <ng-template #isLoading><span class="loading">Loading...</span></ng-template>
  `,
  styles: [`
    .game {
      &-tabs {
        background: #111;
        color: white;
        text-align: left;
        padding: 10px;
        &-par {
          padding: 20px 20px 0 20px;
          margin-bottom: 0;
        }
        &-link {
          color: white;
        }
        &-votes {
          margin-left: 20px;
          display: flex;
          &-count {
            margin-left: 5px;
          }
        }
        ::ng-deep .mat-tab-labels {
          justify-content: center;
        }
      }
      &-votes {
        &-up {
          color: green;
        }
        &-down {
          color: red;
        }
        &-count {
          margin-left: 5px;
          margin-right: 10px;
          vertical-align: super;
        }
      }
      &-description {
        padding: 20px;
      }
      &-screenshot {
        margin-top: 5px;
        width: calc(50% - 10px);
        &:nth-child(even) {
          margin-left: 10px;
        }
      }
      &-trailer {
        width: 100%;
        margin: 20px 0;
      }
    }
    .loading {
      color: white;
      font-size: 36px;
    }
  `]
})
export class GameTabsComponent{
  @Input() game: Game;

  constructor() {}
}

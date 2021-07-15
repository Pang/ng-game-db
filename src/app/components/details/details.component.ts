import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  template: `
    <div class="details">
      <div class="game-banner"> 
        <img
          class="game-banner-img"
          src="{{ game?.background_image }}"
          alt="background image"
        />
      </div>
      <div class="game-content">
        <div class="details-wrapper">
          <div class="game-header">
            <h1 class="game-header-title">{{ game?.name }}</h1>
            <h2 class="game-header-release-date">
              {{ game?.released | date }}
            </h2>
            <p class="game-header-genres">
              <span *ngFor="let genre of game?.genres; let last = last">
                {{ genre.name }}<span *ngIf="!last">, </span>
              </span>
            </p>
            <div class="game-gauge">
              <mwl-gauge
                class="two"
                [max]="100"
                [dialStartAngle]="180"
                [dialEndAngle]="0"
                [value]="gameRating"
                [color]="getColor"
                [animationDuration]="2"
                >
              </mwl-gauge>
              <a
                class="game-gauge-label"
                target="_blank"
                href="{{ game?.metacritic_url }}"
              >
                Metacritic
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .details.wrapper {
      max-width: 900px;
      margin: 20px auto;
      position: relative;
    }

    .details {
      ::ng-deep mwl-gauge {
        width: 150px;
        height: 150px;
        display: block;
        padding: 10px;

        .dial {
          stroke-width: 10;
        }
        .value {
          stroke-dasharray: none;
          stroke-width: 13;
        }
        .value-text {
          fill: #fff;
          font-weight: 700;
          font-size: 24px;
        }
      }
      .game-gauge {
        position: absolute;
        top: 50px;
        right: 0;

        &-label {
          font-size: 20px;
          color: #fff;
          position: relative;
          bottom: 60px;
        }
      }
    }
    .game {
      &-banner {
        height: 442px;
        overflow: hidden;

        &-img {
          width: 100%;
          filter: blur(5px);
        }
      }
      &-content {
        text-align: center;
        position: relative;
        top: -200px;
      }
      &-header {
        &-title {
          font-size: 70px;
          color: #fff;
          font-weight: 700;
          line-weight: 70px;
          white-space: nowrap;
        }
        &-release-date {
          color: #fff;
          font-weight: 700;
        }
        &-genres {
          color: #fff;
          font-weight: 700;
        }
      }
    }
  `]
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string) {
    this.gameSub = this.httpService.getGameDetails(id).subscribe((gameRes: Game) => {
      this.game = gameRes;
      setTimeout(() => {
        this.gameRating = this.game.metacritic;
      }, 1000)
    })
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy() {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}

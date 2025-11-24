import { Component, signal } from '@angular/core';
import { GameService, Choice, GameResult } from './game.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly title = signal('Rock Paper Scissors');
  gameResult = signal<GameResult | null>(null);

  constructor(private gameService: GameService) {}

  play(choice: Choice): void {
    const result = this.gameService.play(choice);
    this.gameResult.set(result);
  }

  reset(): void {
    this.gameResult.set(null);
  }
}

import { Injectable } from '@angular/core';

export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';

export interface GameResult {
  userChoice: Choice;
  computerChoice: Choice;
  result: Result;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  play(userChoice: Choice): GameResult {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(userChoice, computerChoice);
    return {
      userChoice,
      computerChoice,
      result,
    };
  }

  private getComputerChoice(): Choice {
    const choices: Choice[] = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  private determineWinner(user: Choice, computer: Choice): Result {
    if (user === computer) {
      return 'draw';
    }

    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }

    return 'lose';
  }
}

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { App } from './app';
import { GameService } from './game.service';

describe('App', () => {
  let component: App;
  let gameService: GameService;

  beforeEach(() => {
    gameService = new GameService();
    component = new App(gameService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Rock Paper Scissors"', () => {
    expect(component.title()).toBe('Rock Paper Scissors');
  });

  it('should start with no game result', () => {
    expect(component.gameResult()).toBeNull();
  });

  it('should call gameService.play when play is called', () => {
    const spy = vi.spyOn(gameService, 'play').mockReturnValue({
      userChoice: 'rock',
      computerChoice: 'scissors',
      result: 'win',
    });

    component.play('rock');

    expect(spy).toHaveBeenCalledWith('rock');
    expect(component.gameResult()).toEqual({
      userChoice: 'rock',
      computerChoice: 'scissors',
      result: 'win',
    });

    spy.mockRestore();
  });

  it('should reset game result when reset is called', () => {
    component.play('rock');
    expect(component.gameResult()).not.toBeNull();

    component.reset();
    expect(component.gameResult()).toBeNull();
  });
});

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    service = new GameService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('determineWinner', () => {
    it('should return draw when both choices are the same', () => {
      expect(service['determineWinner']('rock', 'rock')).toBe('draw');
      expect(service['determineWinner']('paper', 'paper')).toBe('draw');
      expect(service['determineWinner']('scissors', 'scissors')).toBe('draw');
    });

    it('should return win when user wins', () => {
      expect(service['determineWinner']('rock', 'scissors')).toBe('win');
      expect(service['determineWinner']('paper', 'rock')).toBe('win');
      expect(service['determineWinner']('scissors', 'paper')).toBe('win');
    });

    it('should return lose when user loses', () => {
      expect(service['determineWinner']('rock', 'paper')).toBe('lose');
      expect(service['determineWinner']('paper', 'scissors')).toBe('lose');
      expect(service['determineWinner']('scissors', 'rock')).toBe('lose');
    });
  });

  describe('play', () => {
    it('should return a game result with user and computer choices', () => {
      const result = service.play('rock');
      expect(result.userChoice).toBe('rock');
      expect(['rock', 'paper', 'scissors']).toContain(result.computerChoice);
      expect(['win', 'lose', 'draw']).toContain(result.result);
    });

    it('should use getComputerChoice to determine computer choice', () => {
      const spy = vi.spyOn(service as any, 'getComputerChoice').mockReturnValue('scissors');
      const result = service.play('rock');
      expect(result.computerChoice).toBe('scissors');
      expect(result.result).toBe('win');
      spy.mockRestore();
    });
  });
});

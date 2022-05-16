import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PlayersService {
  players: Player[] = [
    {
      id: "1",
      name: "John",
      position: "Quarterback"
    },
    {
      id: "2",
      name: "John Wick",
      position: "Defender"
    }
  ];

  public getPlayers(): Player[] {
    return this.players;
  }

  public deletePlayer(player: Player): void {
    this.players = this.players.filter(p => p.name !== player.name)
  }

  public editPlayer(player: Player): void {
    this.players.forEach(p => {
      if (p.id === player.id) {
        p.name = player.name;
        p.position = player.position;
      }
    })
  }
}


export interface Player {
  id: string;
  name: string;
  position: string;
}

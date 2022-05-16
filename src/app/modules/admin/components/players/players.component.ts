import { Player } from './../../../../services/players.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Output() playerDeleted = new EventEmitter();
  public playerSelected: Player|any = null;
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  deletePlayer(player: Player): void {
    this.playersService.deletePlayer(player)
  }

  get players() {
    return this.playersService.getPlayers();
  }

  selectPlayer(player: Player): void {
    this.playerSelected = player;
  }

  deSelectPlayer(): void {
    this.playerSelected = null;
  }

  selectNewPlayer(): void {
    const lastId = this.players.length+1 + "";
    const newPlayer: Player = {
      id: lastId,
      name: "",
      position: "",
    }
    this.selectPlayer(newPlayer)
  }

}

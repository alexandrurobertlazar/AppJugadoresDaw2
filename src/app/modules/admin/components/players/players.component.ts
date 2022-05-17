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
  public playerSelected: Player | any = null;
  public isAdding: boolean = false;

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
    if (this.playerSelected !== null) {
      this.closeModal()
      return
    }
    const lastId = this.players.length+1 + "";
    const newPlayer: Player = {
      id: lastId,
      name: "",
      position: "",
    }
    this.isAdding = true;
    this.selectPlayer(newPlayer)
  }

  addPlayer() {
    if (!this.players.some(p => p.id === this.playerSelected.id)) {
      this.players.push(this.playerSelected)
    } else {
      this.players.forEach((p) => {
        if (p.id === this.playerSelected.id) {
          p.name = this.playerSelected.name
          p.position = this.playerSelected.position
        }
      })
    }
    this.closeModal()
  }

  closeModal() {
    this.playerSelected = null;
    this.isAdding = false;
  }
}

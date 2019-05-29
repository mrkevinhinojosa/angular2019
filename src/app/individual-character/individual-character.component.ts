import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{ CHARACTERS } from '../characters/mock-characters';
import { CharacterInterface } from '../interfaces/character-interface';

@Component({
  selector: 'app-individual-character',
  templateUrl: './individual-character.component.html',
  styleUrls: ['./individual-character.component.css']
})
export class IndividualCharacterComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  character: CharacterInterface;
  

  ngOnInit() {
    
    const id = this.router.snapshot.paramMap.get('id');
    this.character = CHARACTERS.find(character => character.id === +id); //+ is converting string 3 to num 3
    console.log(this.character);
  }

}

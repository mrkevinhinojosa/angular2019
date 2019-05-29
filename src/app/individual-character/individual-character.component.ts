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
    console.log(this.router.params['id']);
    this.character = this.router.paramMap.get('id')
  }

}

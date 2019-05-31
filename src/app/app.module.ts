import { BrowserModule } from '@angular/platform-browser';    //These first ones are third party files then space
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';   //This is our files
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { CharactersComponent } from './characters/characters.component';
import { IndividualCharacterComponent } from './individual-character/individual-character.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [   //Make sure to put every component above also down here
    AppComponent,
    HomeComponent,
    TodoComponent,
    CharactersComponent,
    IndividualCharacterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,      //Make sure to put every module above also down here
    AppRoutingModule ,       //We created this line, we are importing this
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

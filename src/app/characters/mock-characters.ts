import { CharacterInterface } from '../interfaces/character-interface';

export const CHARACTERS: CharacterInterface[] = [
   {
       id: 1,
       name: 'Bob',
       image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png',
       type: 'Hero',
       abilities: ['sight', 'walking', 'breathing'],
       description: 'Just some boring guy that shouldn\'t be f*cked with.'
   },
   {
       id: 2,
       name: 'Bob\'s Wife',
       image: 'https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/49062/65301/Girl-Stick-Figure-36-Vinyl-Decal-Sticker__29646.1506201866.jpg?c=2&imbypass=on',
       type: 'Villian',
       abilities: ['Mind control over Bob'],
       description: 'Can control Bob with just a look.'
   },
   {
       id: 3,
       name: 'Batman',
       image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi3hqvM2b_iAhXN7Z4KHZ-sCoMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.denofgeek.com%2Fus%2Fbooks%2Fdc-entertainment%2F280918%2Fbatman-last-knight-on-earth-sheer-insanity&psig=AOvVaw0K-f11hWBfkxe_NaDcR3xx&ust=1559183576798082',
       type: 'Hero',
       abilities: ['Money', 'Gadgets', 'Martial Arts'],
       description: 'He is Batman.'
   },
   {
       id: 4,
       name: 'Joker',
       image: 'https://fsmedia.imgix.net/74/08/a7/f1/defa/49d7/99c8/f4703ec169b1/gallerymovies1920x1080killingjoke5796a8191423c456279010jpg.jpeg?rect=478%2C0%2C1442%2C1080&auto=format%2Ccompress&dpr=2&w=1200',
       type: 'Villian',
       abilities: ['Instanity', 'Figting'],
       description: 'Heath Ledger.'
   },
   {
       id: 5,
       name: 'Naruto',
       image: 'https://i.kym-cdn.com/entries/icons/original/000/015/163/narutoooh.jpg',
       type: 'Hero',
       abilities: ['9 tails', 'Jutsu'],
       description: 'Hidden Leaf Ninja'
   },
   {
       id: 6,
       name: 'Sasuke',
       image: 'https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg',
       type: 'Villian',
       abilities: ['Byakugan', 'Rinnegan'],
       description: 'Itachi\'s younger brother.'
   }
];
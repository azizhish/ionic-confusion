import { Component, OnInit, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding} from 'ionic-angular';
import { Dish } from "../../shared/dish";
import { FavoriteProvider } from "../../providers/favorite/favorite";



/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  errMess: string;
  favorites: Dish[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private favoriteservice: FavoriteProvider,
    @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(){
    this.favoriteservice.getFavorites().subscribe
    (favs => this.favorites = favs, errmess => this.errMess = errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  deleteFavorite(item: ItemSliding, id: number) {
    this.favoriteservice.deleteFavorite(id).subscribe(
      favs => this.favorites = favs, errmess => this.errMess = errmess);
    item.close();
  }

}

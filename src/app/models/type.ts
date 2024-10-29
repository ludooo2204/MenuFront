import ApiServices from "@/Services/ApiServices";
import { ApiError } from "next/dist/server/api-utils";

// Enumérations pour les jours de la semaine
export enum Jour {
  lundi = 'lundi',
  mardi = 'mardi',
  mercredi = 'mercredi',
  jeudi = 'jeudi',
  vendredi = 'vendredi',
  samedi = 'samedi',
  dimanche = 'dimanche'
}

// Enumération pour les saisons
export enum Saison {
  Hiver = 'Hiver',
  Printemps = 'Printemps',
  Ete = 'Ete',
  Automne = 'Automne'
}

// Enumération pour les moments du repas
export enum MomentRepas {
  midi,
  soir
}

// Enumération pour le temps de préparation
export enum TempsPreparation {
  Rapide,
  Normal,
  Long
}

// Enumération pour les types d'ingrédients
export enum TypeIngredient {
  Viande = 'Viande',
  IngredientBasique = 'IngredientBasique',
  Féculent = 'Féculent',
  Légumes = 'Légumes',
  HorsMenu = 'HorsMenu'
}

// Enumération pour les unités de mesure
export enum Unité {
  grammes = 'grammes',
  kilogrammes = 'kilogrammes',
  litre = 'litre',
  ml = 'ml',
  cl = 'cl',
  tranche = 'tranche',
  unité = 'unité'
}

// Classe représentant un aliment à cuisiner
export interface AlimentAcuisiner {
  ingredient: Ingredient;
  Quantité?: number;
  unité?: Unité;



}

// Classe représentant un ingrédient
export interface Ingredient {
  Name: string;
  typeIngredient: TypeIngredient;
}

// Classe de base pour un plat
export class Plat {
  name!: string;
  aliments!: AlimentAcuisiner[];
  momentRepasPossible!: MomentRepas[];
  saison?: Saison[];
  tempsPréparation!: TempsPreparation;
  nbrRepasPossible: number = 1;

}

export class PlatDansMenu extends Plat {
  Jour?: Jour;
  momentRepasRetenu!: MomentRepas;
  nbrItérationDuPlatDansMenu: number = 0;
  date?: Date;
  IsBlocked: boolean = false;


}

// Classe représentant le menu avec les plats de la semaine
export class Menu {
  Plats!: PlatDansMenu[];


}

export default class MenuHandler {
  menu: Menu;
  constructor(menu: Menu) {
    this.menu = menu
  }

  BloquerPlat(numeroRepasDansSemaine: number) {
      this.menu.Plats[numeroRepasDansSemaine].IsBlocked = true;
    }
  DebloquerPlat(numeroRepasDansSemaine : number)
  {
      this.menu.Plats[numeroRepasDansSemaine].IsBlocked = false;
  }
async GetPlatCompatible(numero: number) {
let allPlats=await this.GetAllPlat()
    let platsFiltré = allPlats.filter(e => e.momentRepasPossible.includes(numero % 2 == 0 ? MomentRepas.midi : MomentRepas.soir))
    platsFiltré = platsFiltré.filter(p => p.name != this.menu.Plats[numero].name)
    platsFiltré = platsFiltré.filter(p => !this.menu.Plats.map(x => x.name).includes(p.name))
    return platsFiltré
  }
 async GetAllPlat ():Promise<Plat[]>
  {
    return await ApiServices.getAllPlats()
  }
  ChangerPlatSurDate( platToPut:Plat,  numeroRepasDansSemaine:number)
  {
      let platToRemplace = this.menu.Plats[numeroRepasDansSemaine];
      let platRetenu = new PlatDansMenu();
      platRetenu.name = platToPut.name;
      platRetenu.tempsPréparation = platToPut.tempsPréparation;
      platRetenu.aliments = platToPut.aliments;
      platRetenu.nbrRepasPossible = platToPut.nbrRepasPossible;
      platRetenu.momentRepasPossible = platToPut.momentRepasPossible;
      platRetenu.date = platToRemplace.date;
      platRetenu.Jour = platToRemplace.Jour;
      platRetenu.momentRepasRetenu = platToRemplace.momentRepasRetenu;
      this.menu.Plats[numeroRepasDansSemaine] = platRetenu;
      return this.menu;
  }
}

// Classe représentant une liste de courses
export class ListeCourses {
  private menus: Menu;
  private listeDesCourses: AlimentAcuisiner[] = [];

  constructor(menus?: Menu) {
    this.menus = menus || new Menu();
  }

}
// public List<Plat> GetPlatCompatible(Toto platsObject)
// {
//     var plats = menuRepository.GetPlats();
//     PlatDansMenu platToRemplace = platsObject.plats[platsObject.numero];

import { MomentRepas, Plat, PlatDansMenu } from "../app/models/type"
import ApiServices from "./ApiServices"
let allPlats = [{ "name": "bbq", "aliments": [{ "ingredient": { "name": "saucisses", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "chorizo à cuire BBQ", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "merguez", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0, 1], "saison": [2], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "Cordons bleus - ptits pois carottes", "aliments": [{ "ingredient": { "name": "Cordon bleu", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "Petits pois-carotte", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "couscous", "aliments": [{ "ingredient": { "name": "merguez", "typeIngredient": 0 }, "quantité": 6, "unité": 6 }, { "ingredient": { "name": "légumes à couscous surgelés", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "epices à couscous", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "semoule", "typeIngredient": 2 }, "quantité": 100, "unité": 0 }, { "ingredient": { "name": "semoule epicée", "typeIngredient": 2 }, "quantité": 100, "unité": 0 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 2 }, { "name": "Croque monsieur béchamel", "aliments": [{ "ingredient": { "name": "Pain de mie", "typeIngredient": 2 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "jambon", "typeIngredient": 0 }, "quantité": 6, "unité": 5 }, { "ingredient": { "name": "Farine", "typeIngredient": 1 }, "quantité": 50, "unité": 0 }, { "ingredient": { "name": "Gruyère rapé", "typeIngredient": 1 }, "quantité": 50, "unité": 0 }], "momentRepasPossible": [1, 0], "saison": [3, 2, 1, 0], "tempsPréparation": 1, "nbrRepasPossible": 1 }, { "name": "Escalopes de dinde à la crème - salsifis - pommes dauphines", "aliments": [{ "ingredient": { "name": "Escalope de dinde", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "salsifi", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Crème fraiche", "typeIngredient": 1 }, "quantité": 25, "unité": 4 }, { "ingredient": { "name": "Pommes dauphines", "typeIngredient": 2 }, "quantité": 200, "unité": 0 }], "momentRepasPossible": [0], "saison": [0, 1, 3, 2], "tempsPréparation": 1, "nbrRepasPossible": 1 }, { "name": "jambon à griller - lentilles - salsifi", "aliments": [{ "ingredient": { "name": "jambon à griller", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "lentilles", "typeIngredient": 2 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "salsifi", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "Omelette", "aliments": [{ "ingredient": { "name": "Oeufs", "typeIngredient": 1 }, "quantité": 5, "unité": 6 }], "momentRepasPossible": [1], "saison": [1, 0, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 1 }, { "name": "Pates carbonara", "aliments": [{ "ingredient": { "name": "Pates", "typeIngredient": 2 }, "quantité": 400, "unité": 0 }, { "ingredient": { "name": "Lardons fumés", "typeIngredient": 0 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "Crème fraiche", "typeIngredient": 1 }, "quantité": 20, "unité": 4 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 1 }, { "name": "Pates jambon", "aliments": [{ "ingredient": { "name": "jambon", "typeIngredient": 0 }, "quantité": 4, "unité": 5 }, { "ingredient": { "name": "Pates", "typeIngredient": 2 }, "quantité": 400, "unité": 0 }], "momentRepasPossible": [1, 0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "pizza papa chorizo", "aliments": [{ "ingredient": { "name": "farine pizza", "typeIngredient": 1 }, "quantité": 224, "unité": 0 }, { "ingredient": { "name": "levure fraiche", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sauce pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "fromage pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "chorizo fort", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 2, "nbrRepasPossible": 1 }, { "name": "pizza papa jambon", "aliments": [{ "ingredient": { "name": "farine pizza", "typeIngredient": 1 }, "quantité": 224, "unité": 0 }, { "ingredient": { "name": "levure fraiche", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sauce pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "fromage pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "jambon", "typeIngredient": 0 }, "quantité": 3, "unité": 5 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 2, "nbrRepasPossible": 1 }, { "name": "pizza papa jambon serrano - roquette", "aliments": [{ "ingredient": { "name": "farine pizza", "typeIngredient": 1 }, "quantité": 224, "unité": 0 }, { "ingredient": { "name": "levure fraiche", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 5, "unité": 0 }, { "ingredient": { "name": "sauce pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "fromage pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "jambon serrano", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Roquette", "typeIngredient": 2 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 2, "nbrRepasPossible": 1 }, { "name": "pizza papa reine", "aliments": [{ "ingredient": { "name": "farine pizza", "typeIngredient": 1 }, "quantité": 224, "unité": 0 }, { "ingredient": { "name": "levure fraiche", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "jambon", "typeIngredient": 0 }, "quantité": 3, "unité": 5 }, { "ingredient": { "name": "sauce pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "fromage pizza", "typeIngredient": 1 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "champignons", "typeIngredient": 3 }, "quantité": 200, "unité": 0 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 2, "nbrRepasPossible": 1 }, { "name": "pizza surgelée", "aliments": [{ "ingredient": { "name": "pizza surgelée", "typeIngredient": 1 }, "quantité": 2, "unité": 6 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "poisson - blé - ratatouille", "aliments": [{ "ingredient": { "name": "poisson", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "blé", "typeIngredient": 2 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "ratatouille", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "poisson - quinoa - ratatouille", "aliments": [{ "ingredient": { "name": "poisson", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "quinoa", "typeIngredient": 2 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "ratatouille", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "poisson - riz - ratatouille", "aliments": [{ "ingredient": { "name": "poisson", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "riz", "typeIngredient": 2 }, "quantité": 125, "unité": 0 }, { "ingredient": { "name": "ratatouille", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "poisson - semoule - ratatouille", "aliments": [{ "ingredient": { "name": "poisson", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "semoule", "typeIngredient": 2 }, "quantité": 150, "unité": 0 }, { "ingredient": { "name": "ratatouille", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "Purée - cordon bleus - julienne", "aliments": [{ "ingredient": { "name": "pommes de terre vapeur", "typeIngredient": 2 }, "quantité": 200, "unité": 0 }, { "ingredient": { "name": "Cordon bleu", "typeIngredient": 0 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "haricots beurre", "typeIngredient": 3 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [0], "saison": [2, 1, 0, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "Quiche", "aliments": [{ "ingredient": { "name": "pate brisée", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Lardons fumés", "typeIngredient": 0 }, "quantité": 150, "unité": 0 }, { "ingredient": { "name": "Lait", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "Crème fraiche", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "Oeufs", "typeIngredient": 1 }, "quantité": 4, "unité": 6 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 2 }, { "name": "Quiche au thon", "aliments": [{ "ingredient": { "name": "thon", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Pate feuilletée", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Moutarde", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Tomate", "typeIngredient": 3 }, "quantité": 2, "unité": 6 }, { "ingredient": { "name": "Gruyère rapé", "typeIngredient": 1 }, "quantité": 50, "unité": 0 }, { "ingredient": { "name": "Oeufs", "typeIngredient": 1 }, "quantité": 4, "unité": 6 }, { "ingredient": { "name": "Crème fraiche", "typeIngredient": 1 }, "quantité": 200, "unité": 3 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 5, "unité": 0 }, { "ingredient": { "name": "poivre", "typeIngredient": 1 }, "quantité": 5, "unité": 0 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 2 }, { "name": "Quiche sans pate", "aliments": [{ "ingredient": { "name": "Oeufs", "typeIngredient": 1 }, "quantité": 3, "unité": 6 }, { "ingredient": { "name": "Lait", "typeIngredient": 1 }, "quantité": 250, "unité": 3 }, { "ingredient": { "name": "Farine", "typeIngredient": 1 }, "quantité": 100, "unité": 0 }, { "ingredient": { "name": "Gruyère rapé", "typeIngredient": 1 }, "quantité": 100, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 5, "unité": 0 }, { "ingredient": { "name": "dés de jambon", "typeIngredient": 0 }, "quantité": 1, "unité": 6 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 2 }, { "name": "Sandwich", "aliments": [{ "ingredient": { "name": "Pain de mie", "typeIngredient": 2 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Gruyère rapé", "typeIngredient": 1 }, "quantité": 50, "unité": 0 }, { "ingredient": { "name": "jambon", "typeIngredient": 0 }, "quantité": 4, "unité": 5 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 0, "nbrRepasPossible": 1 }, { "name": "Tagliatelles de légumes", "aliments": [{ "ingredient": { "name": "Carotte", "typeIngredient": 3 }, "quantité": 300, "unité": 0 }, { "ingredient": { "name": "courgettes", "typeIngredient": 3 }, "quantité": 300, "unité": 0 }], "momentRepasPossible": [1, 0], "saison": [1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 1 }, { "name": "Tarte tomates Mozzarella", "aliments": [{ "ingredient": { "name": "Pate feuilletée", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "concentré de tomates", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Tomate", "typeIngredient": 3 }, "quantité": 4, "unité": 6 }, { "ingredient": { "name": "Mozzarella", "typeIngredient": 1 }, "quantité": 1, "unité": 6 }, { "ingredient": { "name": "Basilic", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "sel", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }, { "ingredient": { "name": "poivre", "typeIngredient": 1 }, "quantité": 1, "unité": 0 }], "momentRepasPossible": [1], "saison": [0, 1, 2, 3], "tempsPréparation": 1, "nbrRepasPossible": 2 }]
//     //filtrer plats sur moment du plat à changer
//     plats = plats.Where(p => p.momentRepasPossible.Contains(platsObject.numero % 2 == 0 ? MomentRepas.midi : MomentRepas.soir)).ToList();
//     //filtrer plats plat different
//     plats = plats.Where(p => p.Name != platToRemplace.Name).ToList();
//     //filtrer plats pas deja dans le menu
//     plats = plats.Where(p => !platsObject.plats.Select(x => x.Name).Contains(p.Name)).ToList();
//     return plats;
// }
// function ChangerPlatDansMenu(numero: number, platsDuMenu: PlatDansMenu[]) {

//   let  platRetenu = new PlatDansMenu();
//   platRetenu.Name = platToPut.Name;
//   platRetenu.tempsPréparation = platToPut.tempsPréparation;
//   platRetenu.aliments = platToPut.aliments;
//   platRetenu.nbrRepasPossible = platToPut.nbrRepasPossible;
//   platRetenu.momentRepasPossible = platToPut.momentRepasPossible;
//   platRetenu.date = platToRemplace.date;
//   platRetenu.jour = platToRemplace.jour;
//   platRetenu.momentRepasRetenu = platToRemplace.momentRepasRetenu;
//   menu.Plats[numeroRepasDansSemaine] = platRetenu;
//   return menu;
// }
function getPlatCompatible(numero: number, platsDuMenu: PlatDansMenu[]) {

  // let allPlats=await ApiServices.getAllPlats()
  let platsFiltré = allPlats.filter(e => e.momentRepasPossible.includes(numero % 2 == 0 ? MomentRepas.midi : MomentRepas.soir))
  platsFiltré = platsFiltré.filter(p => p.name != platsDuMenu[numero].name)
  platsFiltré = platsFiltré.filter(p => !platsDuMenu.map(x => x.name).includes(p.name))
  return platsFiltré
}

export default { getPlatCompatible }
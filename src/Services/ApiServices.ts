import { Plat } from "@/app/models/type";

async function getData() {
    const response = await fetch('https://localhost:7241/getMenus');
  return await response.json();

  }

  async function getAllPlats():Promise<Plat[]> {
    const response = await fetch('https://localhost:7241/getPlats');
   return await response.json();
  }
  async function getAllIngredients() {
    const response = await fetch('https://localhost:7241/getIngredients');
   return await response.json();
  }
  export default { getData, getAllPlats,getAllIngredients}
'use client'
import axios from 'axios';
import Image from "next/image";
import styles from "./page.module.css";
import { Jour, MomentRepas, PlatDansMenu } from './models/type';
import { useEffect, useState } from 'react';
import Menus from '@/components/Menus';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ApiServices from '../Services/ApiServices';

export default function Home() {
  const [plats, setPlats] = useState<PlatDansMenu[]>([]); // Utilisation de useState pour gérer l'état
useEffect(()=>{
  let données =  ApiServices.getData()
  
},[])
  async function getMenus() {
    console.log("click")
    let données = await ApiServices.getData()
    console.log(JSON.stringify(données))
    setPlats(données)

  }
  function getPlatsDeRemplacemenent({ numero, plats }: any) {
    console.log(numero)
    console.log(plats)
    axios.post<PlatDansMenu[]>("https://localhost:7241/proposeListPlat", {
      numPlat: numero,
      plats: plats
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des menus:", error);
      });
  }

  async function getPlats(){
    let données = await ApiServices.getAllIngredients()

    console.log(données)
    console.log(JSON.stringify(données))
  }

  return (
    <div className={styles.page}>
      {/* {plats.length > 0 && <Menus data={plats} />}  */}
      <Button size='medium' variant="contained" onClick={getMenus}>Chopper les menus depuis l'api</Button>
      <Button size='medium' variant="contained" onClick={getPlats}>Chopper les plats</Button>

      <Grid container spacing={2} style={{ padding: '16px' }}>
        {/* Colonne gauche */}
        <Grid size={5}>
          <Typography variant="h5" gutterBottom>
            Plats du Jour 0
          </Typography>
          {plats.filter(e => e.momentRepasRetenu == MomentRepas.midi).map((plat, index) => (
            <Paper key={index} elevation={8} onClick={() => getPlatsDeRemplacemenent({ numero: plat.momentRepasRetenu * 7 + index, plats })} style={{
              padding: '16px', marginBottom: '16px', height: '70px', display: "flex", alignItems: "center"
              , justifyContent: "center"
            }}>
              {plat.name}
            </Paper >
          ))}
        </Grid>
        {/* Colonne droite */}
        <Grid size={5}>
          <Typography variant="h5" gutterBottom>
            Plats du Jour 1
          </Typography>
          {plats.filter(e => e.momentRepasRetenu == MomentRepas.soir).map((plat, index) => (
            <Paper key={index} elevation={8} onClick={() => getPlatsDeRemplacemenent({ numero: plat.momentRepasRetenu * 7 + index, plats })} style={{
              padding: '16px', marginBottom: '16px', height: '70px', display: "flex", alignItems: "center"
              , justifyContent: "center"
            }}>
              {plat.name}
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );

}



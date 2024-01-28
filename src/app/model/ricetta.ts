import { Commento } from "./commento";
import { Recensione } from "./recensione";

export interface Ricetta{
    codice: number;
    nomeRicetta: string;
    categoria: string;
    descrizione: string;
    ingredienti: string;
    procedimento: string;
    autore: string;
    tag1: string;
    tag2: string;
    tempoPreparazione: string;
    numeroPersone: string;
    difficolta: string;
    costo: string;
    linkYoutube: string;
    linkSpotify: string;
    pathImmagine: string;
    recensioni: Recensione[];
    commenti: Commento[];
}
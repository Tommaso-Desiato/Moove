interface IMezzo {
  tipo:"bici" | "scooter" | "monopattino";
  id:number;
  stato:"disponibile" | "in uso";
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  pagamento: string;
  prenotaMezzo(mezzo: IMezzo):void;
}

interface ICitta {
  nome:string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
  tipo:"bici" | "scooter" | "monopattino";
  id:number;
  stato: "disponibile" | "in uso";
  
  constructor(tipo:"bici" | "scooter" | "monopattino", id:number, stato:"disponibile" | "in uso") {
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      console.log(`${utente.nome} ${utente.cognome} ha prenotato ${this.tipo} ID: ${this.id}`);
      this.stato = "in uso";  
    } else {
      console.log(`${this.tipo} ${this.id} non disponibile`)
    }
    
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  pagamento: string;
  constructor(  nome: string, cognome: string, email: string, pagamento: string) {
  this.nome = nome;
  this.cognome = cognome;
  this.email = email;
  this.pagamento = pagamento;    
  }

 prenotaMezzo(mezzo: IMezzo): void {
  mezzo.assegnaUtente(this);
 }
}

class Citta implements ICitta {
  nome:string;
  mezziDisponibili: IMezzo[];
  constructor(  nome:string,
    mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(`Il mezzo ${mezzo.tipo} ${mezzo.id} è stato aggiunto a ${this.nome}`);
  }
  
}

const bici = new Mezzo("bici", 1, "disponibile");
const scooter = new Mezzo("scooter", 2, "disponibile");
const monopattino = new Mezzo("monopattino", 3, "disponibile");

const utente1 = new Utente("Pippo", "Farselli", "pippofarselli@gmail.com", "carta di credito");
const utente2 = new Utente("Francesco", "Biancardo", "frankwhite@gmail.com", "conto corrente");

const caserta = new Citta("Caserta", [bici, monopattino]);

caserta.aggiungiMezzo(scooter);

utente1.prenotaMezzo(bici);
utente2.prenotaMezzo(bici);
utente2.prenotaMezzo(monopattino);
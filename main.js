var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, id, stato) {
        this.tipo = tipo;
        this.id = id;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === "disponibile") {
            console.log("".concat(utente.nome, " ").concat(utente.cognome, " ha prenotato ").concat(this.tipo, " ID: ").concat(this.id));
            this.stato = "in uso";
        }
        else {
            console.log("".concat(this.tipo, " ").concat(this.id, " non disponibile"));
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        mezzo.assegnaUtente(this);
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome, mezziDisponibili) {
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log("Il mezzo ".concat(mezzo.tipo, " ").concat(mezzo.id, " \u00E8 stato aggiunto a ").concat(this.nome));
    };
    return Citta;
}());
var bici = new Mezzo("bici", 1, "disponibile");
var scooter = new Mezzo("scooter", 2, "disponibile");
var monopattino = new Mezzo("monopattino", 3, "disponibile");
var utente1 = new Utente("Pippo", "Farselli", "pippofarselli@gmail.com", "carta di credito");
var utente2 = new Utente("Francesco", "Biancardo", "frankwhite@gmail.com", "conto corrente");
var caserta = new Citta("Caserta", [bici, monopattino]);
caserta.aggiungiMezzo(scooter);
utente1.prenotaMezzo(bici);
utente2.prenotaMezzo(bici);
utente2.prenotaMezzo(monopattino);

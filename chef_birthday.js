/*
In questo esercizio, utilizzerai async / await per creare la funzione getChefBirthday(id).
Questa funzione accetta un id di una ricetta e deve:
✔️ - Recuperare la ricetta da https://dummyjson.com/recipes/{id}
✔️ - Estrarre la proprietà userId dalla ricetta
✔️ - Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
✔️ - Restituire la data di nascita dello chef

Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
✔️ - Essere asincrona(async).
✔️ - Utilizzare await per chiamare le API.
✔️ - Restituire una Promise con la data di nascita dello chef.
✔️ - Gestire gli errori con try/catch
*/

/*
async function fetchJson(url) {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
}

async function getChefBirthday(id) {
    try {
        const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
        const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
        return chef.birthDate
    } catch (err) {
        throw new Error("Impossibile recuperare la data di nascita dello chef")
    }
}

getChefBirthday(3)
    .then(dataDiNascita => console.log("Data di nascita dello chef", dataDiNascita))
    .catch(err => console.log(err))
*/

/*
Bonus
Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.

/*
async function fetchJson(url) {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
}

async function getChefBirthday(id) {

    let ricetta
    try {
        ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch (err) {
        throw new Error(`Impossibile recuperare la ricetta con id: ${id}`)
    }

    if (ricetta.message) {
        throw new Error(ricetta.message)
    }


    let chef
    try {
        chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    } catch (err) {
        throw new Error("Impossibile recuperare le informazioni dello chef")
    }

    if (chef.message) {
        throw new Error(chef.message)
    }

    return chef.birthDate
}

getChefBirthday(6)
    .then(dataDiNascita => console.log("Data di nascita dello chef", dataDiNascita))
    .catch(err => console.log(err))
*/


/*
Bonus 2
Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.
Esempio di output atteso con formattazione: Data di nascita dello chef: 15/06/1990
*/

async function fetchJson(url) {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
}

async function getChefBirthday(id) {
    try {
        const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
        const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
        return dayjs(chef.birthDate).format("DD/MM/YYYY")
    } catch (err) {
        throw new Error("Impossibile recuperare la data di nascita dello chef")
    }
}

getChefBirthday(3)
    .then(dataDiNascita => console.log("Data di nascita dello chef", dataDiNascita))
    .catch(err => console.log(err))

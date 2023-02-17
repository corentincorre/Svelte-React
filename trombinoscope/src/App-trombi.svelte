<script>
    import Trombi from "./lib/Trombi.svelte";
    let recherche = "";
    let age = 0;
    let alphabetical = false;
    let alive = false;
    const persons = [
        {
            name: "Romain",
            surname: "l'Ourson",
            born: "1985-12-31",
            description: "Someone who loves Svelte !",
        },
        {
            name: "Harry",
            surname: "Potter",
            born: "1980-07-31",
            description: "A wizard who defeated He-who-must-not-be-named",
        },
        {
            name: "Steve",
            surname: "Jobs",
            born: "1955-02-24",
            dead: "2011-10-05",
            description: "Someone who loved apples",
        },
        {
            name: "Diego",
            surname: "Maradona",
            born: "1960-10-30",
            dead: "2020-11-25",
            description: "The hand of God",
        },
        {
            name: "Osamu",
            surname: "Tezuka",
            born: "1928-11-03",
            dead: "1989-02-09",
            description: "Astro boy's dad",
        },
        {
            name: "Billie",
            surname: "Eilish",
            born: "2001-12-18",
            description: "Happier then ever",
        },
        {
            name: "Bernard",
            surname: "Minet",
            born: "1953-12-28",
            description: "Un mec musclé",
        },
    ];
    let personsWithAge = persons;
    personsWithAge.forEach((element) => {
        element.age = calculAge(element);
    });
    let personsToDisplay = personsWithAge;

    function calculAge(person) {
        const born = new Date(person.born);
        const end = person.dead ? new Date(person.dead) : new Date();
        let calc = end.getTime() - born.getTime();
        let age = new Date(calc);
        return age.getFullYear() - 1970;
    }
    $: personsToDisplayFiltered = alive
        ? filterAlive(personsToDisplay)
        : personsToDisplay;
    $: personsToDisplayFiltered2 = alphabetical
        ? personsToDisplayFiltered.sort((a, b) => (a.name > b.name ? 1 : -1))
        : personsToDisplay;
    function triAlphabetic(array) {
        personsToDisplay = array.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    function filterByName(array, filter) {
        personsToDisplay = [];
        array.forEach((element) => {
            if (
                element.name.toLowerCase().includes(filter.toLowerCase()) ||
                element.surname.toLowerCase().includes(filter.toLowerCase())
            ) {
                personsToDisplay.push(element);
            }
        });
    }
    function filterAlive(array) {
        let res = [];
        array.forEach((element) => {
            if (!element.dead) {
                res.push(element);
            }
        });
        return res;
    }
    function reset() {
        personsToDisplay = persons;
        recherche = "";
        age = 0;
        alphabetical = false;
        alive = false;
    }
</script>

<nav class="filters">
    <button
        class:active={alphabetical}
        on:click={() => (alphabetical = !alphabetical)}
    >
        Par ordre alphabétique
    </button>
    <input
        type="text"
        bind:value={recherche}
        on:input={(e) => filterByName(persons, recherche)}
    />
    <input
        type="range"
        name="age"
        bind:value={age}
        min="0"
        max="100"
        step="1"
    />
    <label for="age">Age minimum : {age}</label>
    <button class:active={alive} on:click={() => (alive = !alive)}
        >Seulement les vivants</button
    >
    <button on:click={reset}>Réinitialiser les filtres</button>
</nav>

<Trombi items={personsToDisplayFiltered} />

<style>
    .filters {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        height: 80px;
        background-color: white;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    }
    button {
        border: none;
        background-color: aliceblue;
        border-radius: 5px;
        padding: 5px 10px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    }
    .active {
        background-color: #5555ff;
        color: white;
    }
</style>

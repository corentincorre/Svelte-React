<script>
    import Slider from "./lib/Slider.svelte";
    import Book from "./lib/Book.svelte";
    import Movie from "./lib/Movie.svelte";
    import Song from "./lib/Song.svelte";
    const items = [
        {
            name: "Harry Potter",
            director: "Alfonso Cuaron",
            type: "movie",
        },
        {
            name: "Harry Potter",
            author: "JK Rowling",
            type: "book",
        },
        {
            name: "Star Wars",
            director: "Georges Lucas",
            type: "movie",
        },
        {
            name: "Hey Jude",
            band: "The Beatles",
            type: "song",
        },
        {
            name: "La bamba",
            band: "Les Gipsy Kings",
            type: "song",
        },
        {
            name: "Les fleurs du mal",
            author: "Charles Baudelaire",
            type: "book",
        },
    ];
</script>

<Slider {items} let:item>
    {#if item.type === "book"}
        <Book name={item.name} author={item.author} />
    {:else if item.type === "movie"}
        <Movie name={item.name} director={item.director} />
    {:else if item.type === "song"}
        <Song name={item.name} band={item.band} />
    {/if}
</Slider>

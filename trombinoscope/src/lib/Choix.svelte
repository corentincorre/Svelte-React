<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let question;
</script>

<div>{question}</div>
<button
    on:click={() => {
        dispatch("yes");
    }}>Oui</button
>
<button
    on:click={() => {
        dispatch("no");
    }}>Non</button
>

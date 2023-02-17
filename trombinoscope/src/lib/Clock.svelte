<script>
    import { onMount, onDestroy } from "svelte";
    let time = new Date();
    $: seconds = time.getSeconds();
    onMount(() => {
        const i = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(i);
        };
    });
</script>

<div>{time.getHours()}:{time.getMinutes()}:{seconds}</div>

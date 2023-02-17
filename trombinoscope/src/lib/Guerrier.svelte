<script>
    export let name;
    export let power = 0;
    let exp = 0;
</script>

<div class="Guerrier" on:mousemove={() => exp++}>
    <dl>
        <dt>nom :</dt>
        <dd>{name}</dd>
        <dt>puissance :</dt>
        <dd>{power}</dd>
        <dt>exp :</dt>
        <dd>{exp}</dd>
    </dl>
</div>

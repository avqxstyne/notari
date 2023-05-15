<script lang="ts">
    let count = 0

    function increment() {
        count = count + 1;
    }
</script>

<button on:click={increment}>
    I've been clicked {count} {count === 1 ? "time" : "times"}!
</button>
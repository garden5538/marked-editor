<template>
    <div id="app">
        <marked-editor></marked-editor>
    </div>
</template>

<script>

export default {
    name: 'app'
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>

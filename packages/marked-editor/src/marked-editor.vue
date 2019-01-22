<template>
    <div class='marked marked-editor'
         ref="markedEditor">
        <header class='marked-header'></header>
        <section class='marked-content'></section>
    </div>
</template>

<script>
export default {
    name: 'marked-editor'
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "./marked.scss";
</style>

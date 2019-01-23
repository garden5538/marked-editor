<template>
    <div class='marked marked-editor'
         ref="markedEditor">
        <header class='marked-tools'>
            <ul class='marked-tools-left'>
                <template v-for="tool in toolsLeft">
                    <li :key="tool.key"
                        :name="tool.label">
                        <span v-if="tool.icon === 'title'"
                              class="icon">{{ tool.key }}</span>
                        <i v-else
                           class="fa"
                           :class="tool.icon"></i>
                    </li>
                </template>
            </ul>
            <ul class='marked-tools-right'>
                <template v-for="tool in toolsRight">
                    <li :key="tool.key"
                        :name="tool.label">
                        <i class="fa"
                           :class="tool.icon"></i>
                    </li>
                </template>
            </ul>
        </header>
        <section class='marked-content'>
            <div class="marked-content-text"></div>
            <div class="marke-content-preview"></div>
        </section>
    </div>
</template>

<script>
import marked from './marked';
export default marked;
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "./marked.scss";
</style>

<template>
    <div class='marked marked-editor'
         ref="markedEditor">
        <header class='marked-tools'>
            <ul class='marked-tools-left'>
                <template v-for="tool in toolsLeft">
                    <li :key="tool.key"
                        :name="tool.label"
                        v-if="tools[tool.key]">
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
                        :name="tool.label"
                        v-if="tools[tool.key]">
                        <i class="fa"
                           :class="tool.icon"></i>
                    </li>
                </template>
            </ul>
        </header>
        <section class='marked-content'>
            <div class="marked-content-text">
                <textarea v-model="markText"></textarea>
            </div>
            <div class="marked-content-preview  markdown-body oneDark"
                 v-html="previewHtml"></div>
        </section>
    </div>
</template>

<script>
import marked from './scripts/marked';
export default marked;
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "./styles/github.scss";
@import "./styles/oneDark.scss";
@import "./styles/marked.scss";
</style>

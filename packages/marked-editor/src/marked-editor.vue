<template>
    <div class='marked marked-editor'
         ref="markedEditor">
        <header class='marked-tools'>
            <ul class='marked-tools-left'>
                <template v-for="tool in toolsLeft">
                    <li :key="tool.key"
                        :name="tool.label"
                        v-if="tools[tool.key]"
                        @click="insertContent(tool.value)">
                        <span v-if="tool.icon === 'title'"
                              class="icon">{{ tool.key }}</span>
                        <i v-else
                           class="fa"
                           :class="tool.icon"></i>
                    </li>
                </template>
            </ul>
            <ul class='marked-tools-right'>
                <li class="fa fa-eye" @click="togglePreview"></li>
                <li class="fa fa-desktop" @click="toggleMarkdown"></li>
                <li class="fa fa-arrows-alt"></li>
            </ul>
        </header>
        <section class='marked-content'>
            <div class="marked-content-text"
                 v-show="!showFullPreview">
                <textarea v-model="markText"
                          ref="textarea"
                          @keydown.tab.stop="onTab"></textarea>
            </div>
            <div class="marked-content-preview markdown-body oneDark"
                 v-html="previewHtml"
                 v-show="showPreview"></div>
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

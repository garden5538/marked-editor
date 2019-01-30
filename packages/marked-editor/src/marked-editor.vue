<template>
    <div :class="isFullScreen?'fullScreen marked':'marked'"
         ref="markedEditor"
         @mouseover="addListener"
         @mouseout="removeListener">

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
                           class="iconfont"
                           :class="tool.icon"></i>
                    </li>
                </template>
                <li v-if="tools['import']"
                    class="absolute-li">
                    <i class="iconfont icon-import"></i>
                    <input ref="fileMarkdown"
                           name="markdown"
                           type="file"
                           accept="text/markdown"
                           @change="importFile">
                </li>
                <li v-if="tools['export']"
                    class="absolute-li"
                    @click="exportFile">
                    <i class="iconfont icon-export"></i>
                </li>
            </ul>
            <ul class='marked-tools-right'>
                <li class="iconfont icon-menu-left"
                    v-if="tools['menu']"
                    name="目录"
                    @click="toggleMenu"></li>
                <li class="iconfont icon-yulan"
                    @click="togglePreview"
                    v-show="showPreview"
                    name="预览"></li>
                <li class="iconfont icon-edit"
                    @click="togglePreview"
                    v-show="!showPreview"
                    name="编辑"></li>
                <li class="iconfont icon-double"
                    @click="toggleDouble"
                    name="双栏"></li>
                <li class="iconfont icon-full-screen"
                    @click="toggleFullScreen"
                    name="全屏"
                    v-show="!isFullScreen"></li>
                <li class="iconfont icon-exit-full"
                    @click="toggleFullScreen"
                    name="退出全屏"
                    v-show="isFullScreen"></li>
            </ul>
        </header>
        <section class='marked-content'>
            <div class="marked-content-text"
                 v-show="isDouble || showPreview"
                 @mouseenter="isScrollMark = true">
                <ul v-if="showNumber"
                    ref="textIndex"
                    class="sider-number">
                    <li v-for="(item,index) in numberLength"
                        :key="index">{{ index + 1 }}</li>
                </ul>
                <textarea v-model="markText"
                          ref="textarea"
                          @keydown.tab.stop="onTab"
                          @scroll="contentScroll"></textarea>
            </div>
            <div class="marked-content-preview markdown-body oneDark"
                 ref="preview"
                 v-html="previewHtml"
                 v-show="isDouble || !showPreview"
                 @scroll="contentScroll"
                 @mouseenter="isScrollMark = false"></div>
        </section>

        <div class="marked-menus"
             v-show="showMenu">
            <div>
                <header>
                    <span>目录</span>
                    <i class="iconfont icon-cha"
                       @click="showMenu = false"></i>
                </header>
                <ul class="marked-menu-list">
                    <li v-for="menu in markNav"
                        :key="menu.title"
                        :class="'title-level-'+menu.level">
                        {{ menu.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import marked from './scripts/index';
export default marked;
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "./styles/github.scss";
@import "./styles/oneDark.scss";
@import "./styles/index.scss";
</style>

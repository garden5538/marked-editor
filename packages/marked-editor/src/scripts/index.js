import marked from 'marked';
import hljs from 'highlight.js';

import toolsConfig from './tools.config';
import 'font-awesome/scss/font-awesome.scss';
import 'github-markdown-css/github-markdown.css';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    }
});

export default {
    name: 'marked-editor',
    props: {
        toolBars: { // 工具栏配置
            type: Object,
            default: function() {
                return {};
            }
        },
        showNumber: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            toolsLeft: toolsConfig.toolsLeft,
            toolsRight: toolsConfig.toolsRight,
            allTools: toolsConfig.showTools,
            showPreview: true,
            showFullPreview: false,
            isFullScreen: false,
            numberLength: 1,
            markText: '', // 输入框内容
            previewHtml: '' // 预览内容
        };
    },
    computed: {
        tools() {
            return Object.assign(this.allTools, this.toolBars);
        }
    },
    watch: {
        markText(val) {
            this.previewHtml = marked(val, {
                sanitize: true
            });
            this.numberLength = val.split('\n').length;
        }
    },
    methods: {
        insertContent(text) { // 插入文本
            this.markText += text;
            const textarea = this.$refs['textarea'];
            textarea.focus();
            index;
        },
        onTab(e) { // tab按键
            this.insertContent('    ', this);
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        togglePreview() {
            this.showPreview = !this.showPreview;
            this.showFullPreview = false;
        },
        toggleMarkdown() {
            this.showFullPreview = !this.showFullPreview;
            this.showPreview = true;
        },
        toggleFullScreen() {
            this.isFullScreen = !this.isFullScreen;
        },
        addListener() { // 事件监听，阻止保存
            this.removeListener();
            document.addEventListener('keydown', this.listener);
        },
        removeListener() {
            document.removeEventListener('keydown', this.listener);
        },
        listener(e) {
            if (e.keyCode === 83) {
                if (e.metaKey || e.ctrlKey) {
                    e.preventDefault();
                    this.handleSave();
                }
            }
        },
        handleSave() {
            let query = {
                markText: this.markText,
                previewHtml: this.previewHtml
            };

            this.$emit('saveMarkdown', query);
        }
    }
};

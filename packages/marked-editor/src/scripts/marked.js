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
        }
    },
    data() {
        return {
            toolsLeft: toolsConfig.toolsLeft,
            toolsRight: toolsConfig.toolsRight,
            allTools: toolsConfig.showTools,
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
        }
    },
    methods: {
        insertContent(text) {
            this.markText += text;
        },
        onTab(e) {
            this.insertContent('    ', this);
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    }
};

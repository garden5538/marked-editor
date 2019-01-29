import marked from 'marked';
import hljs from 'highlight.js';

import toolsConfig from './tools.config';
import '../fonts/iconfont.css';
import 'github-markdown-css/github-markdown.css';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

export default {
    name: 'marked-editor',
    props: {
        toolBars: { // 工具栏配置
            type: Object,
            default: function () {
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
            isDouble: false,
            showFullPreview: false,
            isFullScreen: false,
            numberLength: 1,
            markText: '', // 输入框内容
            previewHtml: '', // 预览内容
            markNav: [] // 目录
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
        setNav() {
            const renderer = new marked.Renderer();
            let currentL1 = 0;
            let currentL2 = 0;
            renderer.heading = (text, level) => {
                if (level === 1) {
                    this.markNav.push({ title: text, level, children: [] });
                    currentL1++;
                    currentL2 = 0;
                } else if (level === 2) {
                    this.markNav[currentL1 - 1].children.push({ title: text, level, children: [] });
                    currentL2++;
                } else if (level === 3) {
                    this.markNav[currentL1 - 1].children[currentL2 - 1].push({ title: text, level });
                }
                return this.markNav;
            };
            marked(this.markText, { renderer });
        },
        insertContent(text) { // 插入文本
            this.markText += text;
            const textarea = this.$refs['textarea'];
            textarea.focus();
        },
        onTab(e) { // tab按键
            this.insertContent('    ', this);
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        togglePreview() { // 切换预览
            this.showPreview = !this.showPreview;
            if (this.isDouble) {
                this.isDouble = false;
            }
        },
        toggleDouble() { // 切换双栏
            this.isDouble = !this.isDouble;
        },
        toggleFullScreen() { // 切换全屏
            this.isFullScreen = !this.isFullScreen;
        },
        addListener() { // 事件监听，阻止保存
            this.removeListener();
            document.addEventListener('keydown', this.listener);
        },
        removeListener() { // 移除监听事件
            document.removeEventListener('keydown', this.listener);
        },
        listener(e) { // 监听ctrl+s按键
            if (e.keyCode === 83) {
                if (e.metaKey || e.ctrlKey) {
                    e.preventDefault();
                    this.handleSave();
                }
            }
        },
        handleSave() { // 保存
            let query = {
                markText: this.markText,
                previewHtml: this.previewHtml
            };

            this.$emit('saveMarkdown', query);
        },
        importFile(e) { // 导入markdown
            const file = e.target.files[0];
            let fileAccept = file.name.match(/\.md$/);
            if (!fileAccept) {
                return false;
            }

            const fr = new FileReader();
            const that = this;
            fr.onload = function () {
                that.markText = fr.result;
            };
            fr.readAsText(file, {
                encoding: 'utf-8'
            });
        }
        exportFile() { //  导出markdown
            this.setNav();
            const fileName = this.markNav[0].title + '.md';
            const dom = document.createElement('a');
            dom.setAttribute('href', 'data:text/plain;charset=UTF-8,' + encodeURIComponent(this.markText));
            dom.setAttribute('download', fileName);
            dom.style.display = 'none';
            dom.click();
        }
    }
};

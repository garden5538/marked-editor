const toolsLeft = [{
    label: '标题1',
    key: 'H1',
    value: '\n# ',
    icon: 'title',
    show: true
}, {
    label: '标题2',
    key: 'H2',
    value: '\n## ',
    icon: 'title',
    show: true
}, {
    label: '标题3',
    key: 'H3',
    value: '\n### ',
    icon: 'title',
    show: true
}, {
    label: '标题4',
    key: 'H4',
    value: '\n#### ',
    icon: 'title',
    show: true
}, {
    label: '标题5',
    key: 'H5',
    value: '\n##### ',
    icon: 'title',
    show: true
}, {
    label: '标题6',
    key: 'H6',
    value: '\n###### ',
    icon: 'title',
    show: true
}, {
    label: '粗体',
    key: 'strong',
    value: '****',
    icon: 'fa-bold',
    show: true
}, {
    label: '斜体',
    key: 'italic',
    value: '**',
    icon: 'fa-italic',
    show: true
}, {
    label: '删除线',
    key: 'strikeThrough',
    value: '~~~~',
    icon: 'fa-strikethrough',
    show: true
}, {
    label: '分割线',
    key: 'hr',
    value: '----\n',
    icon: 'fa-minus',
    show: true
}, {
    label: '引用',
    key: 'quote',
    value: '\n> ',
    icon: 'fa-quote-right',
    show: true
}, {
    label: '无序列表',
    key: 'ul',
    value: '\n+ ',
    icon: 'fa-list-ul',
    show: true
}, {
    label: '有序列表',
    key: 'ol',
    value: '\n1. ',
    icon: 'fa-list-ol',
    show: true
}, {
    label: '代码块',
    key: 'code',
    value: '\n``` \n\n ```\n',
    icon: 'fa-code',
    show: true
}, {
    label: '链接',
    key: 'link',
    value: '\n[示例](http://baidu.com)',
    icon: 'fa-link',
    show: true
}, {
    label: '图片',
    key: 'image',
    value: '\n![image](https://noticejs.oss-cn-hangzhou.aliyuncs.com/%E6%9C%AA%E6%A0%87%E9%A2%98-3.jpg)',
    icon: 'fa-picture-o',
    show: true
}, {
    label: '未完成列表',
    key: 'notChecked',
    value: '\n- [ ] ',
    icon: 'fa-square-o',
    show: true
}, {
    label: '已完成列表',
    key: 'checked',
    value: '\n- [x] ',
    icon: 'fa-check-square-o',
    show: true
}, {
    label: '表格',
    key: 'table',
    value: '\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2\n\n`',
    icon: 'fa-table',
    show: true
}];

const toolsRight = [{
    label: '显示预览',
    key: 'showPreview',
    icon: 'fa-eye',
    show: true
}, {
    label: '预览',
    key: 'preview',
    icon: 'fa-desktop',
    show: true
}, {
    label: '全屏',
    key: 'fullScreen',
    icon: 'fa-arrows-alt',
    show: true
}];

const showTools = {};
const allTools = toolsLeft.concat(toolsRight);
const length = allTools.length;

for (let i = 0; i < length; i++) {
    let tool = allTools[i];
    showTools[tool.key] = tool.show;
}

export default {
    toolsLeft,
    toolsRight,
    showTools
};

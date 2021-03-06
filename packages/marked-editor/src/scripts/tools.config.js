const toolsLeft = [{
    label: '标题1',
    key: 'H1',
    value: '# ',
    icon: 'title',
    show: true
}, {
    label: '标题2',
    key: 'H2',
    value: '## ',
    icon: 'title',
    show: true
}, {
    label: '标题3',
    key: 'H3',
    value: '### ',
    icon: 'title',
    show: true
}, {
    label: '标题4',
    key: 'H4',
    value: '#### ',
    icon: 'title',
    show: false
}, {
    label: '标题5',
    key: 'H5',
    value: '##### ',
    icon: 'title',
    show: false
}, {
    label: '标题6',
    key: 'H6',
    value: '###### ',
    icon: 'title',
    show: false
}, {
    label: '粗体',
    key: 'strong',
    value: '****',
    icon: 'icon-strong',
    show: true
}, {
    label: '斜体',
    key: 'italic',
    value: '**',
    icon: 'icon-xieti',
    show: true
}, {
    label: '删除线',
    key: 'strikeThrough',
    value: '~~~~',
    icon: 'icon-delete-line',
    show: true
}, {
    label: '分割线',
    key: 'hr',
    value: '----\n',
    icon: 'icon-hr',
    show: false
}, {
    label: '引用',
    key: 'quote',
    value: '\n> ',
    icon: 'icon-quote',
    show: true
}, {
    label: '无序列表',
    key: 'ul',
    value: '\n+ ',
    icon: 'icon-list-ul',
    show: false
}, {
    label: '有序列表',
    key: 'ol',
    value: '\n1. ',
    icon: 'icon-list-ol',
    show: false
}, {
    label: '代码块',
    key: 'code',
    value: '\n``` \n\n ```\n',
    icon: 'icon-code',
    show: true
}, {
    label: '链接',
    key: 'link',
    value: '\n[示例](http://baidu.com)',
    icon: 'icon-link',
    show: true
}, {
    label: '图片',
    key: 'image',
    value: '\n![image](https://noticejs.oss-cn-hangzhou.aliyuncs.com/%E6%9C%AA%E6%A0%87%E9%A2%98-3.jpg)',
    icon: 'icon-image',
    show: true
}, {
    label: '未完成列表',
    key: 'notChecked',
    value: '\n- [ ] ',
    icon: 'icon-no-check',
    show: true
}, {
    label: '已完成列表',
    key: 'checked',
    value: '\n- [x] ',
    icon: 'icon-checked',
    show: true
}, {
    label: '表格',
    key: 'table',
    value: '\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2\n\n',
    icon: 'icon-table',
    show: true
}];

const toolsRight = [{
    label: '导出',
    key: 'export',
    icon: 'icon-export',
    show: true
}, {
    label: '导入',
    key: 'import',
    icon: 'icon-import',
    show: true
}, {
    label: '目录',
    key: 'menu',
    icon: 'icon-menu-right',
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

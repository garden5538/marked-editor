import markedEditor from './src/marked-editor';

markedEditor.install = function (Vue) {
    Vue.component(markedEditor.name, markedEditor);
};

export default markedEditor;

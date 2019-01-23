import toolsConfig from './tools.config';

import 'font-awesome/scss/font-awesome.scss';

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
            allTools: toolsConfig.showTools
        };
    },
    computed: {
        tools() {
            return Object.assign(this.allTools, this.toolBars);
        }
    }
};

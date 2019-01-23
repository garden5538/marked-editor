import {
    toolsLeft,
    toolsRight
} from './tools.config';

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
            toolsLeft: toolsLeft,
            toolsRight: toolsRight,
            allTools: { // 显示隐藏的工具栏
                strong: true
            }
        };
    },
    computed: {
        tools() {
            return Object.assign(this.allTools, this.toolBars);
        }
    }
};

import React from 'react';

import LogMixin from '../mixins/mixin.js'

export default React.createClass({
    mixins: [LogMixin],
    render: function () {
        return <div>Good</div>
    }
})
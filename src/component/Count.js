import React from 'react';

export default class Count extends React.PureComponent {

    state = {
        name: 'zs'
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps)
    //     console.log(nextState)

    //     if (nextProps.count % 2 !== 0) {
    //         return false;
    //     }

    //     return true
    // }


    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // }




    componentDidUpdate() {
        console.log('我更新了')
    }



    render() {
        const { count, person1 } = this.props;
        return <div>
            {/* {count} */}
            <p>{person1.name}</p>
            <p>{person1.age}</p>
        </div>
    }
}
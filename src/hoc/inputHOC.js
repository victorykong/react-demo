import React from 'react';

function inputHOC(WrappedComponent) {
    return class extends React.Component {

        state = {
            model: {
                [this.props['v_model']]: ""
            },
            error: ""
        }


        onChange(event) {
            const { v_model, validator } = this.props

            if (validator.func) {
                if (!validator.func(event.target.value)) {
                    this.setState({ error: validator.msg })
                } else {
                    this.setState({
                        error: "",
                        model: {
                            [v_model]: event.target.value
                        }
                    })
                }
            }
        }

        render() {
            console.log(this.state)



            const { model } = this.state;
            const { v_model } = this.props;

            const newProps = {
                ...this.props,
                error: this.state.error
            }
            return <WrappedComponent
                value={model[v_model]}
                onChange={this.onChange.bind(this)}
                {...newProps}
            />
        }
    }

}

export default inputHOC;
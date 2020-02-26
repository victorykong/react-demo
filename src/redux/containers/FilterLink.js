import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => {
    // ownProps 指的是当前组件上存在的 props 
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
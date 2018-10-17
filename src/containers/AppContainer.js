import {connect} from 'react-redux'

import App from '../components/App';
import { fetchRecipesAction, receiveRecipesAction } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => dispatch(fetchRecipesAction()),
        receiveRecipes: (recipes) => dispatch(receiveRecipesAction(recipes))
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
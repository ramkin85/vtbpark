import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import CarOrderForm from "../../forms/CarOrderForm/CarOrderForm";
import PaperSheet from "../../components/PaperSheet/PaperSheet";
import { Values } from "redux-form-website-template";
import Banner from "../../components/Banner/Banner";

const Home = props => (

    <div>
        <div>
            <Banner/>
        </div>
        <PaperSheet >
            <CarOrderForm/>
            {/*<Values form="carOrderForm" />*/}
        </PaperSheet>
    </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
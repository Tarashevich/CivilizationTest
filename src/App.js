/* eslint-disable */
import image from '../src/assets/plus-solid.svg';

const App = () => {

    return (

        <div className="rootCity">

            <div className="container">
                <div className="row">
                    <div className="col-md-4 city_add_wrapper">
                        <div className="city d-flex align-items-center justify-content-center">
                            <button className="city__btn city_add">
                                <img src={image} alt="plus"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="calculate-wrapper">
                    <button className="btn btn-primary calculate">Calculate</button>
                </div>
            </div>
        </div>

    );
}

export default App
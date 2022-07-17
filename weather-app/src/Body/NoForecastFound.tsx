export interface NoForecastFound {

}

const NoForecastFound = () => {

    return(
        <div className="noItemsContainer">
            <div className="showError">
                No data found, please update the weather or try connecting to internet.
            </div>
        </div>
    );
};

export default NoForecastFound;
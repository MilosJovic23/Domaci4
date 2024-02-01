
import "bootstrap/dist/css/bootstrap.min.css"
import Weather from "./Components/Weather"
import "./style.css"
function App(){


    return(
        <>
            <div className="container w-100 d-flex justify-content-center flex-column align-items-center mt-5">
              <div className="addCityInput w-50 d-flex align-items-center h-100 justify-content-center gap-1 rounded-2 flex-column"><Weather/>  </div>
            </div>

        </>
    )
}


export default App;
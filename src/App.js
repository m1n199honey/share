import AllAppRoutes from "./routes";

import "./assets/css/admin.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/style.css";
import "./assets/css/feather.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/dataTables.bootstrap4.min.css";

function App() {
  return (
    <div className="App">
      <AllAppRoutes />
      <div id="overlayer">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
    </div>
  );
}

export default App;

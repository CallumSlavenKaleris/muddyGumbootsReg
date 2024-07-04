/* eslint-disable react-refresh/only-export-components */
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import awsExports from "./aws-exports";
import { Link } from "react-router-dom";
import "@aws-sdk/util-endpoints";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className="App-header">
              <div className="regFormDiv">
                {/* Sign Out Button */}
                <button>
                  <Link to="/registerSingle">Register Single</Link>
                </button>
                <button>
                  <Link to="/registerGroup">Register Team</Link>
                </button>
                <button>
                  <Link to="/registerCoporate">
                    Register Company Group and Teams
                  </Link>
                </button>
                <button onClick={signOut}>Sign Out</button>
              </div>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);

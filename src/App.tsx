/* eslint-disable react-refresh/only-export-components */
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import awsExports from "./aws-exports";
import "@aws-sdk/util-endpoints";
import { Button } from "react-bootstrap";

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
                <Button href="/registerSingle">Register Single</Button>
                <Button href="/registerGroup">Register Team</Button>
                <Button href="/registerCoporate">
                  Register Company Group and Teams
                </Button>
                <Button onClick={signOut}>Sign Out</Button>
              </div>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);

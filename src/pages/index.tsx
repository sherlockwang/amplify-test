import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import TodoPage from './todo'
import ErrorBoundary from '~/components/ErrorBoundary'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const MainRouter: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="app">
          <AmplifySignOut />
          <Switch>
            <Route path="/" exact component={TodoPage} />
          </Switch>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default withAuthenticator(observer(MainRouter))

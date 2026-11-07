import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";

/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import './index.css'
import App from './App.tsx'
import Platform from './pages/Platform.tsx'
import Solusi from './pages/Solusi.tsx'
import Kontak from './pages/Kontak.tsx'

const root = document.getElementById('root')

render(() => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/platform" component={Platform} />
    <Route path="/solusi" component={Solusi} />
    <Route path="/kontak" component={Kontak} />
  </Router>
), root!)

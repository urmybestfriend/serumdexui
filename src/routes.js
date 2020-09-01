import { HashRouter, Route } from 'react-router-dom';
import TradePage from './pages/TradePage';
import OpenOrdersPage from './pages/OpenOrdersPage';
import React from 'react';
import BalancesPage from './pages/BalancesPage';
import BasicLayout from './components/BasicLayout';

export function Routes() {
  return (
    <HashRouter basename={'/'}>
      <Route exact path="/" component={TradePageContents} />
      <Route exact path="/orders" component={OpenOrdersPageContents} />
      <Route exact path="/balances" component={BalancesPageContents} />
    </HashRouter>
  );
}

function TradePageContents() {
  return (
    <BasicLayout>
      <TradePage />
    </BasicLayout>
  );
}

function OpenOrdersPageContents() {
  return (
    <BasicLayout>
      <OpenOrdersPage />
    </BasicLayout>
  );
}

function BalancesPageContents() {
  return (
    <BasicLayout>
      <BalancesPage />
    </BasicLayout>
  );
}

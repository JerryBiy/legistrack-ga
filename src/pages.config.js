import Dashboard from './pages/Dashboard';
import BillForm from './pages/BillForm';
import TrackedBills from './pages/TrackedBills';
import EmailLists from './pages/EmailLists';
import TwitterFeed from './pages/TwitterFeed';
import Settings from './pages/Settings';
import TwitterSetup from './pages/TwitterSetup';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Dashboard": Dashboard,
    "BillForm": BillForm,
    "TrackedBills": TrackedBills,
    "EmailLists": EmailLists,
    "TwitterFeed": TwitterFeed,
    "Settings": Settings,
    "TwitterSetup": TwitterSetup,
}

export const pagesConfig = {
    mainPage: "Dashboard",
    Pages: PAGES,
    Layout: __Layout,
};
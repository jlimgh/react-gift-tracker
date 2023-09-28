import GiftForm from './components/GiftForm';
import GiftList from './components/GiftList';
import GiftSearch from './components/GiftSearch';
import GiftValue from './components/GiftValue';


function App() {
    return <div className="container is-fluid">
        <GiftForm />
        <GiftSearch />
        <GiftList />
        <GiftValue />
    </div>;
}

export default App;
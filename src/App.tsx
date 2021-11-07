import { PropertyDashboard } from './components/PropertyDashboard';

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>🏠 Dream Abode</h1>
      </div>

      <div className='dashboard'>
        <PropertyDashboard />
      </div>
    </div>
  );
}

const styles = {
  header:
    'fixed border text-gray-900 bg-gray-100 w-full font-bold text-3xl shadow p-4 z-50',
  dashboard: 'w-3/5',
};

export default App;

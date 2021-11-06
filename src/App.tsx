import { PropertyDashboard } from './components/PropertyDashboard';

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Dream Abode</h1>
      </div>

      <div className='dashboard'>
        <PropertyDashboard />
      </div>
    </div>
  );
}

const styles = {
  header: 'fixed border bg-blue-200 w-full text-lg shadow z-50',
  dashboard: 'p-10 w-3/5',
};

export default App;

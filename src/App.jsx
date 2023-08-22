import ThemeProvider from 'react-bootstrap/ThemeProvider'
import NavigationBar from './components/Navbar'
import './App.css';

const App = () => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <NavigationBar />
    </ThemeProvider>
  )
};

export default App;

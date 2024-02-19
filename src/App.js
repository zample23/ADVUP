import './reset.css';
import './base.scss';
import './vars.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Projects from './components/projects/Projects';
import Advantages from './components/advantages/Advantages';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
        <Projects />
        <Advantages />
        <Form />
      </main>
      <Footer />
      <script src="js/main.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    </div>
  );
}

export default App;

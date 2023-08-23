import Header from '../Components/Header';
import TodosLogic from '../Components/TodosLogic';
import '../styles/appSttyles.css';

const Home = () => {
    return (
    //   <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
    //   </div>
    );
  };
  export default Home;
  
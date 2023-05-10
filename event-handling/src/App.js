import './App.css';
import Form from './components/Form';
import Welcome from './components/Welcome';
import ButtonClickEvent from './components/ButtonClickEvent';
import GetFormInput from './components/GetFormInput';
import SubmitFormInput from './components/SubmitFormInput';
import MultipleStateInFunctionalComponent from './components/MultipleStateInFunctionalComponent';
import MultipleStateInClassComponent from './components/MultipleStateInClassComponent';
import UpdatingStateThatDependsOnPreviousState from './components/UpdatingStateThatDependsOnPreviousState';
import TwoWayBinding from './components/TwoWayBinding';
import ParentComponent from './components/ChildToParent';
import CurrencyConverter from './components/CurrencyConverter';
import LiftingStateUp from './components/LiftingStateUp';
import MyList from './components/ListData';
import StatefulList from './components/StatefullList';
import ColorChanger from './components/ColorChanger';
import PortalExample from './components/PortalExample';
import Dropdown from './components/portal/DropDown';
import Loading from './components/Loading';



function App() {
  return (
    <div className="App">
      <Welcome message='Hi all !' purpose='This is an app to learn events in react' notes='Please follow' />
      <hr />
      <ButtonClickEvent />
      <hr />
      <GetFormInput />
      <hr />
      <SubmitFormInput />
      <hr />
      <Form />
      <hr />
      <MultipleStateInFunctionalComponent />
      <hr />
      <MultipleStateInClassComponent />
      <hr />
      <UpdatingStateThatDependsOnPreviousState />
      <hr />
      <TwoWayBinding />
      <hr />
      <ParentComponent />
      <hr />
      <CurrencyConverter />
      <hr />
      <LiftingStateUp />
      <hr />
      <MyList />
      <hr />
      <StatefulList />
      <hr />
      <ColorChanger />
      <hr />
      <PortalExample />
      <hr />
      <Dropdown />
      <hr/>
      <Loading/>
    </div>
  );
}

export default App;

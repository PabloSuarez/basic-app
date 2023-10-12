import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { AppLayout } from './components';
import { MoveItemList } from "./MoveItemsList";
import { TodoForm } from "./TodoForm";

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route index element={<MoveItemList />} />
          <Route path="/list-test" element={<MoveItemList />} />
          <Route path="/todo" element={<TodoForm />} />
        </Routes>
      </BrowserRouter>
    </AppLayout >
  );
};

export default App;

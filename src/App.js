import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./comps/ChatFeed";
import LoginForm from "./comps/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="0c6731f0-295f-4ad1-87f7-3b61edb4f16c"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // userName='dendrixx'
      // userSecret='verngar10'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;

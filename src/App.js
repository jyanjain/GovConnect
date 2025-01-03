import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import DiscoverScheme from './pages/DiscoverScheme';
import CreateProfile from './pages/ProfilePage';
import UploadDocuments from './pages/UploadDocuments';
import ChatBotScreen from './pages/ChatBot';
import SchemeDetail from './pages/SchemeDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // element:<ChatBotScreen/>
    // element: <UploadDocuments />,
    // element: <CreateProfile />,
  },
  {path:"/discover",
    element: <DiscoverScheme />
  },
  {
    path:"/profile",
    element:<CreateProfile/>
  },
  {
    path:"/upload",
    element:<UploadDocuments/>
  },
  {
    path:"/chatbot",
    element:<ChatBotScreen/>
  },
  {
    path:"/scheme/:title",
    element:<SchemeDetail/>
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
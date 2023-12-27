import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import 'Styles/globals.css';
import 'Assets/Fonts/Dosis-Regular.ttf';
import 'Assets/Fonts/Dosis-Bold.ttf';

import Footer from 'Components/Footer/Footer';
import FullScreenLoader from 'Components/FullscreenLoader/FullScreenLoader';
import Header from 'Components/Header/Header';
import useCurrentPage from 'Hooks/useCurrentPage';
import Chat from 'Pages/Chat';
import Contacts from 'Pages/Contacts';
import CreateGroup from 'Pages/CreateGroup';
import Inbox from 'Pages/Inbox';
import Login from 'Pages/Login';
import NotFound from 'Pages/NotFound';
import SignUp from 'Pages/SignUp';
import { useChatStore } from 'Stores/chat';
import { useLoggedUser } from 'Stores/loggedUser';
import { PageBody } from 'Styles/common.styles';

function App() {
  const { onAnimationEnd, displayLocation, transitionStage } =
    useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const location = useLocation();

  const { screenIsLoading } = useChatStore((state) => state);
  const { loggedUser } = useLoggedUser((state) => state);

  const safeLocation =
    location.pathname === '/' || location.pathname === '/signup';

  useEffect(() => {
    if (loggedUser.id === 0 && !safeLocation) {
      navigate('/');
    }
  }, [loggedUser, navigate, safeLocation]);

  return (
    <span className={`${transitionStage}`} onAnimationEnd={onAnimationEnd}>
      <FullScreenLoader isLoading={screenIsLoading} />
      <Header />
      <PageBody>
        <Routes location={displayLocation}>
          <Route path="/" index element={<Login />} />
          <Route path="signup" index element={<SignUp />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="create-group" element={<CreateGroup />} />
          <Route path="chat/:id" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageBody>
      <Footer />
    </span>
  );
}

export default App;

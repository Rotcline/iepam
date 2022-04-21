import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle';
import GlobalFonts from './fonts/fonts';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import EditCurseData from './components/EditCurseData';
import EditDiapositives from './components/EditDiapositives';
import UnityFrame from './components/UnityFrame';
import LandingPage from './components/LandingPage';
import Courses from './components/Courses';
import UserData from './components/UserData';
import EditCourses from './components/EditCourses';

import { SEARCH_BASE_URL } from "./config";

import UserProvider from './context';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import EditAdmin from './components/EditAdmin';


const client = new ApolloClient({
  uri: SEARCH_BASE_URL,
  cache: new InMemoryCache()
});

function App() {
  return (
        <ApolloProvider client={client}>
          <Router>
            <UserProvider>
              <>
                <Routes>
                  <Route path='/' element={<LandingPage/>} />
                  <Route path='/forgotpassword' element={<ForgotPassword />} />
                  <Route path='/courses' element={<Courses />} />
                  <Route path='/resetpassword' element={<ResetPassword/>} />
                  <Route path='/:courseID' element={<UnityFrame/>} />
                  <Route path='/editcourses' element={<EditCourses />} />
                  <Route path='/editcoursedata' element={<EditCurseData/>} />
                  <Route path='/edituser' element={<UserData/>}/>
                  <Route path='/editadmin' element={<EditAdmin/>}/>

                  <Route path='/*' element={<div>505</div>}/>
                </Routes>
                <GlobalStyle />
                <GlobalFonts />
              </>
            </UserProvider>
          </Router>
        </ApolloProvider>
  );
}

export default App;

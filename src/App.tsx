import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle';
import GlobalFonts from './fonts/fonts';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import EditCourseData from './components/CourseEditor';
import UnityFrame from './components/Slides';
import LandingPage from './components/LandingPage';
import Courses from './components/UserCourses';
import UserData from './components/UserData';
import EditCourses from './components/AdminCourses';

import { SEARCH_BASE_URL } from "./config";

import UserProvider from './context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import EditAdmin from './components/RoleEditor';
import EditMembers from './components/CourseMembersEditor';


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
                  <Route path='/editcourses/:courseID' element={<EditCourseData/>} />
                  <Route path='/editmembers/:courseID' element={<EditMembers/>} />
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

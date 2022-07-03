# Mirinae front-end-developer Challenge Project

Project is supposed to contain 2-page UI employing React.

Layouts dir contains:
    Navbar
    UserProfile
    SidebarData 
Pages dir contains:
  Analyzer
  History
  HistoryData

*Required implement functionality

Page router
  -Implemented with react-dom-router@6
  
Analyzer page
History page
GNB UI action
Open GNB with click GNB icon
  - implemented with useState toggle on Navbar.js
Close GNB with click X icon 
  - implemented with useState toggle on Navbar.js
Close with click body area except GNB area
  - not working.
GNB slide move with animation (ref. mirinae.io)
  - substitued Animation with Transition (issue occurs when closing.)
GNB menu active style
  - not working.
GNB sub menu is active by green when page is active
  - not working.
Input element
  - working properly.
Input focus style
  - CSS focus style implemented. 
  
User Name
Set user’s name and display by use useContext
  - Username and initial saved in UserData.js file.
History page
  Display data by using JSON data and loop.
    - Data imported from HistoryData.js and being iterated using Map function on History.js

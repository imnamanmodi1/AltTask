# AltTask

## Quick Start

The quickest way to get started with this boilerplate is to fork it into your own repo.
Get into the root of the application

```bash
cd AltTask/
```

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

View the website at: http://localhost:3000


## User Stories:

> ##### Mentor Name: Prashant

> ##### Mentee Name: Naman

### Prashant's Stories:

1. Prashant Should be able to Login/Register
2. Prashant should be able to add task
3. Prashant should be able to assign task to teams & individuals
4. Prashant should be able to see all tasks created/assigned/completed.
5. Prashant should be able to recieve notification when anyone marks task as complete.
6. Prashant should be able to assign deadlines(date & time) to task created.
7. Prashant should belong to an Organisation,
8. Prashant can have multiple teams,
9. Prashant have to share organisation contacts & teams with other mentors in organisation

### Naman's Stories:

1. Naman should be able to login/register
2. Naman should be able to see his pendings tasks & deadlines with priorities.
3. Naman should be able to add comment to task & mark it as complete when done.
4. Naman should be able to filter tasks based on priority & date of completion.
5. Naman should be able to see reports(how productive he is)
6. Naman should be able to recieve notifications before deadlines(6 hrs)

### ER diagram:

![](https://digitaliz.in/wp-content/uploads/2019/08/ER-Diagram.jpeg)

### SPRINT 1:

#### Backend:

1. Model Creation for Team/Tasks/User/People.
2. Login/Register routes for User. [Route: "/api/v1/login" && Route: "/api/v1/register"]
3. Handle OnBoarading
4. Create Task(POST)
   1. Assign Task to Individual/Team -- reference \_\_id of the individual/team
   2. Set a deadline to task -- Date
   3. Priority -- String
5. Add Teams/Individual to Individual Tasks
6. See Tasks

#### Frontend:

1. Make Landing Page
2. Make Login/Register Component
3. Make OnBoarding
4. Make DashBoard
   1. Add Task
      1. Assign Task
      2. Set Deadline to task
      3. Add n number of Comments to task
      4. Set Priority to task
      
      
*   Frontend File Library Structured for Documentation(ICP)-:
    *   ### **Variable Glossary**

        *   **src/api/algolia.js**
            *  - endpoint - Endpoint for algolia pipe on backend
            *  - api - Api functions mapped
        *   **src/api/applications.js**
            *   - endpoint - Base endpoint for applications routes
        *   **src/api/bug.js**
            *   - endpoint - Base endpoint for bug routes
        *   **src/api/company.js**
            *   - endpoint - Base endpoint for company routes
        *   **src/api/faq.js**
            *   - endpoint - Base ednpoint for faq routes
        *   **src/api/favourite.js**
            *   - endpoint - Base ednpoint for favourite routes
        *   **src/api/http.js**
            *   - requests - Requests mapping abstraction
        *   **src/api/location.js**
            *   - endpoint - Base ednpoint for location routes
        *   **src/api/meetup.js**
            *   - endpoint - Base ednpoint for meetup routes
        *   **src/api/notifications.js**
            *   - endpoint - Base ednpoint for notifications routes
        *   **src/api/reference.js**
            *   - endpoint - Base ednpoint for reference routes
        *   **src/api/skill.js**
            *   - endpoint - Base ednpoint for skill routes
        *   **src/api/university.js**
            *   - endpoint - Base ednpoint for university routes
        *   **src/api/user.js**
            *   - endpoint - Base ednpoint for user routes
        *   **src/constants.js**
            *   - currentOnboardingPage - Mapping from variable to string to prevent getting string wrong
            *   - authorization - Mapping from variable to string to prevent getting string wrong
            *   - token - Mapping from variable to string to prevent getting string wrong
            *   - currentUser - Mapping from variable to string to prevent getting string wrong
            *   - loggedIn - Mapping from variable to string to prevent getting string wrong
            *   - pageOne - Mapping from variable to string to prevent getting string wrong
            *   - signupData - Mapping from variable to string to prevent getting string wrong
            *   - facebookDetails - Mapping from variable to string to prevent getting string wrong
            *   - selectedLocation - Mapping from variable to string to prevent getting string wrong
            *   - previousLocation - Mapping from variable to string to prevent getting string wrong
            *   - currentLocation - Mapping from variable to string to prevent getting string wrong
            *   - SEARCH_DELAY - how much to wait before last keypress to search
            *   - ALGOLIA_APP_ID - Algolia's app id
            *   - ALGOLIA_SEARCH_API_KEY - Algolia search API key (not used)
            *   - ALGOLIA_USER_INDEX - Mapping to user index name
            *   - ALGOLIA_LOCATION_INDEX - Mapping to location index name
            *   - ALGOLIA_SKILL_INDEX - Mapping to skill index name
            *   - ALGOLIA_COMPANY_INDEX - Mapping to company index name
            *   - ALGOLIA_UNIVERSITY_INDEX - Mapping to university index name
            *   - FACEBOOK_APP_ID - Facebook's app ID
            *   - DEFAULT_IMAGES - Default images for skills, locations, universities and companies
            *   - mapIndexToReadableTitle - Mapping from algolia indexes to a readable title
            *   - mapReadableTitleToIndex - Mapping from readable title to algolia index
            *   - mapTitleToSingularTitle - Mapping from titles to singular titles
            *   - mapSingularTitleToPlural - Mapping from Singular to plural
            *   - mapDegreeWithSubTypes - Mapping from degree type to subtypes
            *   - mapDegreeToRanking - Mapping from degree type to ranking
            *   - mapSearchTitleToPlural - Mapping from Search page titles to plural
            *   - months - Month list
        *   **src/messages.js**
            *   - errors - Error messages mapping
            *   - success - Success messages mapping
        *   **src/notificationSubscription.js**
            *   - convertedVapidKey - VAPID key on Uint8Array
        *   **src/routes/index.js**
            *   - protectedRoutes - Routes mapping for authenticated users
            *   - openRoutes - Routes mapping for non-authenticated users
        *   **src/routing/util.js**
            *   - singlePathRoutesMap - Mapping for single path and their loader - -
            *   - doublePathRoutesMap - Mapping for double path and their loader
        *   **src/schemas/applyPage1Schema.js**
            *   - schema - The shcema used for validation on the apply page 1
        *   **src/schemas/editProfileSchema.js**
            *   - schema - The shcema used for validation on the edit profile page
        *   **src/schemas/hostMeetupSchema.js**
            *   - schema - The shcema used for validation on the host meetup page
        *   **src/schemas/loginSchema.js**
            *   - schema - The shcema used for validation on the login page
        *   **src/schemas/newExperienceSchema.js**
            *   - schema - The shcema used for validation on the profile page in the edit/add experience
        *   **src/schemas/newUniversitySchema.js**
            *   - schema - The shcema used for validation on the profile page in the edit/add education
        *   **src/schemas/page2Schema.js**
            *   - schema - The shcema used for validation on the page 2 of signup flow
        *   **src/schemas/page4Schema.js**
            *   - objectIdRegex - Regex for mongo object ids
            *   - objectIdSchema - Schema for validating object id
            *   - studentDetail - Shema for validating an education entry
            *   - studentDetails - Schema for validating a list of education entries
            *   - workerDetail - Schema for validating an experience entry
            *   - workerDetails - Schema for validating a list of education
        *   **src/schemas/page5Schema.js**
            *   - objectIdRegex - Regex for mongo object ids
            *   - objectIdSchema - Schema for validating object id
            *   - schema - Schema for validation of page 5
        *   **src/schemas/page6Schema.js**
            *   - FILE_SIZE - Maximum image size
            *   - SUPPORTED_FORMATS - The files that are supported
            *   - schema - Schema for page 6
        *   **src/schemas/pageOnePointThree.js**
            *   - schema - Schema for page 1.3 on signup flow
        *   **src/schemas/reportBugSchema.js**
            *   - schema - Schema for report a bug page
        *   **src/schemas/settingsSchema.js**
            *   - emailSchema - Schema for changing email on settings page
            *   - passwordSchema - Schema for changing password on settings page
        *   **src/schemas/signupSchema.js**
            *   - schema - Schema used for the signup/apply form
        *   **src/serviceWorker.js**
            *   - isLocalhost - Check if its running on localhost
        *   **src/stores/authStore.js**
            *   - loggedIn - Is the user logged in?
            *   - signupData - User data on signup
            *   - authenticationToken - Token used on authenticated requests
            *   - facebookConfirmationDone - Is facebook confirmation done?
            *   - facebookDetails - Details gotten from facebookweewew
            *   - currentUser - The current user that is online
        *   **src/stores/faqStore.js**
            *   - questions - The list of questions on FAQ page
        *   **src/stores/favouriteStore.js**
            *   - _favourites - Stores all the favourite data gotten by the server
            *   - endOfResults - Are all the saved users already shown?
            *   - selectedLocation - The selected filter for locations
            *   - selectedName - The selected filter for names
            *   - favouritesFilter - The combination of location and name filters, to store and cache users
        *   **src/stores/loadingStore.js**
            *   - loading - Is the anything loading? (Controls loading wheel)
            *   - pb_loading - Should progressbar be on a loading state?
            *   - pb_loaded - Should progressbar be on a loded state?
            *   - page_loading - Should the page mask be shown?
        *   **src/stores/onboardingStore.js**
            *   - currentOnboardingPage - Current page on onboarding page
            *   - progressPercentage - Signup/apply flow progress bar percentage
            *   - skills - skill search resukts
            *   - universitySearchResults - University search results
            *   - companySearchResults - company search results
            *   - selectedUniversity - Selected university
            *   - selectedCompany - Selected company
            *   - selectedSkills - Selected skills
            *   - currentLocation - Residing location
            *   - previousLocation - Location of origin
            *   - initialUniversitySearch - Is it first University search?
            *   - initialCompanySearch - Is it first company search?
            *   - initialSkillSearch - Is it first skill search?
            *   - dataClaimed - Is data claimed?
        *   **src/stores/profileStore.js**
            *   - sendingData - Is it sending bio data?
            *   - uploadingImage - Is it uploading an image?
            *   - userData - The user data
            *   - currentLocation - The residing location
            *   - previousLocation - The location of origin
            *   - visitingLocation - The visiting location
            *   - selectedLocation - Selected locations object
            *   - selectedLocation.previousLocation - Selected origin location
            *   - selectedLocation.visitingLocation - Selected visiting location
            *   - selectedLocation.currentLocation - Selected residing location
            *   - profileData - Other user data (for profile pages)
            *   - initialSignals - Used for determining what changed on signal page
            *   - initialSignals.minutesToCall - Initial minutes wanting to call
            *   - initialSignals.currentLocation - Initial residing location
            *   - initialSignals.visitingLocation - Initial visiting location
            *   - initialSignals.daysToExpire - Initial days to expire
            *   - signals - Signal page input data
            *   - signals.minutesToCall - Minutes wanting to call
            *   - signals.currentLocation - Name of residing location
            *   - signals.currentLocationObject - Residing location object
            *   - signals.visitingLocation - Name of visiting location
            *   - signals.visitingLocationObject - Visiting location object
            *   - signals.daysToExpire - Days for visiting location to expire
            *   - formInputsVisibility - Controls visibility of inputs on signal page
            *   - formInputsVisibility.minutesToCall - Should minutes to call be seen?
            *   - formInputsVisibility.visitingALocation - Should visiting location be seen?
            *   - formInputsVisibility.changingCurrentLocation - Should current location be seeing?
        *   **src/stores/referenceStore.js**
            *   - _results - Stores all the results
            *   - referenceName - The name of the current reference
            *   - locations - The locations for the location filter
            *   - selectedLocation - Selected location filter
            *   - resultType - The reference type
            *   - selectedLocationType - Selected location type filter
            *   - endOfResults - Have the results ended?
            *   - locationTypes - Location types for location type filter
        *   **src/stores/searchStore.js**
            *   - initialSearch - Is first search?
            *   - activeIndex - The active index
            *   - endOfResults - The end of results
            *   - firstFilteredQueryMade - Was the first filtered query made?
            *   - filters - Filters for search page
            *   - degreeTypeFilters - Degree type filter
            *   - peopleCount - Count of people on people tab
            *   - searchValue - Value for search input
            *   - activeView - Active searh tab
            *   - allSearchResults - All the results
            *   - searchResults - Search results currenrly shown
            *   - filterSearchValue - Value for filter search input
            *   - selectedValues - Selected filter valiues
            *   - filterSearchResults - Filter options to select
            *   - selectedFilters - Marked filters
        *   **src/stores/subscriptionStore.js**
            *   - subscriptions - What the user is listening to
            *   - entities - entities map for each thing the user can listen to input
            *   - initialSearch - is first search?
        *   **src/stores/usertimelineStore.js**
            *   - userFeed - Feed entries
            *   - meetups - Meetup list
            *   - meetup_chats - Meetup chat list
            *   - endOfResults - Is the end of results?
        *   **src/utilities/index.js**
            *   - isDesktop - is current browser desktop?
            *   - degreeTypes - List of degreeTypes formated in right format for inserting on dropdowns
    *   ### React Component Documentation - ICP  
        This is a list of all components on the app, with what they do and where are they located through the app. This list is structured based on the file structure of the source code, with each component under the file it’s defined on.

        *   **Components**
            *   **Auth**
                *   **FaceboookVerification.js** - Contains the facebook button component that is used for handling facebook login on Signup page 1.1
                *   **PrivateRoute.js** - This file Contains the component that is responsible for handling the redirection of unauthorized pages
            *   **Favourites**
                *   **Favourite.js** - Contains the component for the user card on the Saved page (/favourite)
                *   **Favourites.js** - Contains the component that contains all the user cards and a header with a description for these cards
                *   **Header.js** - Contains the header for the page with the title and filter
            *   **Forms**
                *   **ForgottenPassword.js** - Contains the component with the forgot password form on landing page
                *   **InputWithCounter.js** - Contains the component that is an input with limited characters, (the counter is not active) - This component is used in the signup flow page 5, the edit/add educations and experiecnes in the profile page, and the edit profile page.
                *   **Location.js** - Contains the location component, that is responsible for selecting locations from the database and google places. One example of the location inputs in Listen page (/listen), in the location inputs
                *   **LocationWithBubble** - Contains the component that replaces the location input with a label as an indication that it has been selected. Examples of this components can be found at the location input fields in the edit profile page (/profile/edit)
                *   **SignupForm.js** - Contains the component with the form for signup and apply on landing page
                *   **LoginForm.js** - Contains the component for login in the landing page
                *   **SchoolFormItem.js** - Contains the component for each education in the signup flow page 4
                *   **WorkFormItem.js** - Contains the component for each experience in the signup flow page 4
                *   **WorkerDetails.js** - Contains the component that has the experiences and allows adding more, located on signup flow page 4
                *   **StudentDetails.js** - Contains the component that has the educations and allows adding more, located on signup flow page 4
                *   **SearchWithBubble.js** - Contains the component that replaces the SearchWithAddition input with a label when selected. One example can be found at the add/edit education/experience forms in the university and company fields
                *   **SearchWithAddition.js** - Contains the component that allows the user to search for entities in the database and also adding new entities to the database. One example can be found at the profile page, when editing the skills
                *   **TextAreaWithCounter.js** - Text area version of input with counter
                *   **OnboardingSkillsContainer.js** - Allows adding multiple skills in the signup page 5
            *   **LinkWithLoader** - An wrapper to react router’s link, that is used on the whole app for triggering the loading system for going to new pages
            *   **Loader** - The bottom left loading wheel
            *   **Profile**
                *   **EditPersonalInfo.js** - An wrapper to the Edit Profile form
                *   **EditPersonalInfoForm.js** - The form of the edit profile page
                *   **Education.js** - The education card on the profile
                *   **EducationList.js** - The list of education cards in the profile
                *   **Experience.js** - The experience card on the profile
                *   **ExperienceList.js** - The list of experience cards in the profile
                *   **NewEducationEntry.js** - The component for adding or editing educations in the profile
                *   **NewExperienceEntry.js** - The component for adding or editing experiences in the profile
                *   **PersonalInfo.js** - The header component
                *   **Skills.js** - Component responsible for showing / adding skills to the profiles
            *   **ProgressBar** - Loading system's progress bar
            *   **Reference**
                *   **CompanyTable.js** - Contains all users in company reference page
                *   **LocationTable.js** - Contains all users in location reference page
                *   **SkillTable.js** - Contains all users in skill reference page
                *   **UniversityTable.js** - Contains all users in university reference page
            *   **Search**
                *   **SearchItem.js** - Result on search page (/search)
                *   **ResultsContainer.js** - Contains all results on search page (/search)
                *   **EntityFilter.js** - Filter between entity types on search page (/search)
                *   **SearchInput.js** - Input for searching on search page (/search)
                *   **PeopleFilter.js** - Filters in people entity on search page (/search)
                *   **PeopleSearchView.js** - View for searching people on search page (/search)
                *   **DegreeTypePeopleFilter.js** - People filter exclusively for degreeType on search page (/search)
            *   **Settings**
                *   **ForgotPasswordBtn.js** - Button to send password recovery email on settings page
            *   **Shared**
                *   **EmailVerificationBar.js** - Bar that reminds user to verify email
                *   **Navbar.js** - Navbar component
            *   **Subscription**
                *   **SubscriptionFormToggleItem.js** - Subscription form item with only a toggle on Listen page (/subscribe)
                *   **SubscriptionForm.js** - Whole form component on Listen page (/subscribe)
                *   **SubscriptionFormItem.js** - Complex subscription form item on Listen page (/subscribe)
            *   **UserTimeline**
                *   **SidebarItem.js** - Side bar meetup item on UserTimeline page (/ )
                *   **MeetupChat.js** - Side bar meetup chat item on UserTimeline page (/ )
                *   **UserFeedMenu.js** - Feeds menu on UserTimeline page (/ )
                *   **UserFeedItem.js** - Feed item component on UserTimeline page (/ )
            *   **Utils**
                *   **ErrorBoundary.js** - Shows the error to the user
                *   **Exception.js** - Card to show exceptions
                *   **PageMask.js** - Component that has a page mask for loading the app on refresh
            *   **Pages**
                *   **Applications**
                    *   **Applicant.js** - Applicant user in applicants page
                    *   **Index.js** - Component Implementation
                *   **EditProfile** - Edit Profile Page
                *   **EmailVerification** - Page when email verification occours
                *   **FAQ Page** with FAQ pages
                *   **Favourites** - Favourite page
                *   **HostMeetup** - Host a meetup page
                *   **LandingPage** - Landing page
                    *   **Slider.js** - Contains slider logic
                    *   **Slide1.js** - Slide 1 from landing page
                    *   **Slide2.js** - Slide 2 from landing page
                    *   **Slide3.js** - Slide 3 from landing page
                    *   **Slide4.js** - Slide 4 from landing page
                    *   **index.js** - Component implementation
                *   **MainPage** - All the other pages are routed in this component
                *   **Meetups** - Page with meetups for mobile screens
                *   **NotCompatiblePage** - This is a page for non compatible browsers
                *   **Onboarding** - Signup flow pages
                    *   **ApplyPage1.js** - Page 1.5 from signup flow (exclusive for the apply process)
                    *   **ApplyPage2.js** - Page 7 from signup flow (exclusive for the apply process)
                    *   **Page1.js** - Page 1 from signup flow
                    *   **Page2.js** - Page 2 from signup flow
                    *   **Page3.js** - Page 3 from signup flow
                    *   **Page4.js** - Page 4 from signup flow
                    *   **Page5.js** - Page 5 from signup flow
                    *   **Page6.js** - Page 6 from signup flow
                    *   **index.js** - Component implementation
                *   **Privacy** - Privacy policy page
                *   **Profile** - User profile page
                    *   **index.js** - Component implementation
                    *   **UserProfile.js** - Wrapper on other profile components
                *   **Reference** - Reference pages
                    *   **Company.js** - Company reference page
                    *   **Skill.js** - skill reference page
                    *   **Location.js** - location reference page
                    *   **University.js** - university reference page
                    *   **index.js** - Component implementation
                *   **ReportBug** - Report a bug page
                *   **ReportedBugs** - Reported bugs pag
                    *   **Bug.js** - Bug component
                    *   **index.js** - Component implementation
                *   **ResetPassword** - Reset password from recovery email page
                *   **Search** - Search page
                *   **SentMeetups** - Sent meetups page
                    *   **Meetup.js** - Meetup component
                    *   **Index.js** - Component implementation
                *   **Settings** - Settings page
                    *   **SettingsForm.js** - The form for this page
                    *   **index.js** - Component implementation
                *   **SignalBroadcast** - Signal broadcast page
                *   **SubscribePage** - Subscribe (listening) page
                *   **UserTimeline** - User timeline page
    *   ### File libary with descriptions

    *   ## Frontend architecture diagram  
        https://drive.google.com/drive/folders/1Mmyn8Od173ioTIroZdYa6PUhyeKCNNpy

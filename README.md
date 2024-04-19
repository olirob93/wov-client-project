## Quickstart

1. Install the dependencies with `npm install`
2. Run `rm -rf node_modules/.vite/deps` on a git terminal
3. Create a .env file on the project base folder
4. Add the firebase token to the .env file.
5. Run the application with `npm run dev`

## File Structure 🗂️

- Components contains all generic components that are shared across pages. They should be generic and reusable, and testable in isolation.

- Pages contains our different application views. Generally any requests should be activated here so that any children components don't have to, e.g. If we have a 'User Details' view, we should dispatch our network requests for user information from here.

- Styles consists global style files that should be made available across our application.

## Testing ⚗️

- This project utilizes Vitest with React Testing Library (RTL).

- All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).

- Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic.
  - A example can be seen in `src/pages/Home`

## Code Quality 🌟

- This project uses prettier and ESlint to increase code readability and consistency.

### Navigation Menu

- The Nav menu is imported as the Mui Component Bottom Navigation
- This contains 4 BottomNavigationAction components, that each contain Icon Components.
- All of these components are imported from the Mui Component Library and can be style by the selectors stipulated in the Navigation.scss file.
- Currently they prove the Link for the react-router-dom dependency, that will be used to route to different pages within the App.

### Calendar Page

- The calender page displays a calender and the completed tasks for the current date.
- By clicking on a previous date, the completed tasks for that date can be viewed.
- A different month can be viewed by clicking on the arrow buttons on either side of the month name.
- All the fututre dates and months in the calender are disabled.
- By clicking on the down arrow in the task, additional information about the task will be displayed.
- The page has the Header at the top and the Navigation Menu at the bottom.

### Profile Page

- The Profile page contains the information regarding a players profile displaying it on the prfolie screen.

  - Image
  - Score
  - Name
  - Bio
  - Email
  - Password

- The player's password is starred out.
- The buttons allow the user to edit their profile data and sign out.

### Update Profile Page

- The Profile page allows the user to update their personal information and change their password.
- The following fields can be chaned
  - Name
  - Bio
  - Password
- The player's password is starred out.


### Leaderboard Page

- The Leaderboard page contains each users score, ranking them in order from high to low.
- It allows for users to see how many points other users have.
- The user can also navigate to the leaderboard page.

### Home Page

- A welcome page that uses the Navigation, Header and Button components.
- The page displays a welcome message to the user and allows them to navigate to other parts of the app.

### Tasks Page

- The task page displays the current tasks the user must complete.
- It displays the:
  - The task
  - The task category
  - The points for completion
- It enables the user to:
  - Search through through the tasks by name and category
  - Check the tasks they've completed

### Register Page

- Given a new user successfully creates an account, When the account creation process is complete,
  Then three specific documents should be created in the following collections test-tribe, test-completed-tasks, and test-active-tasks in Firestore.

- Given a new user successfully creates an account and is assigned a unique UUID, When the collections are created, Then each collection document should have the UUID of the user as its unique identifier.

- Given a new user successfully creates an account and is assigned a unique UUID, When the test-tribe document gets created, then the document should match the example given.

### Firestore Provider

The `<FirestoreProvider/>`, is as a central state management context for caching data fetched from Firestore, Firebase's NoSQL database. The provider initializes three state variables `activeTasksCache`, `completedTasksCache`, and `leaderBoardCache`, each representing cached data for different pages data respectively. The context provides functions like `getActiveTasks`, `getCompletedTasks`, and `getLeaderboard` to asynchronously fetch data from Firestore, it utilizing the cache to minimize unnecessary requests. By encapsulating this logic within the context, it enables efficient data management and sharing across the application's components.

#### useFirestore

This hook utilizes React's useContext hook to access the Firestore context (FirestoreContext) provided by the `<FirestoreProvider/>`. It then returns the context, which includes the state variables and functions defined in the FirestoreProvider.

### Private Routing

Private routing allows authenticated users to access the main application, including the the tasks, profile, calender, leaderboard, and home pages. If authenticated users are on the error page, when they click the home button, they would be redirected back to the homepage. 

Unautheticated users would not be able to access the main application, even if they URL is manipulated; it would redirect the user to an error page. When the home button is clicked on the error page, the unauthenticated user would be redirected back to the splash page where they can create and account or sign in

UserUID and isAuthenticated can be retrieved from useAuth.tsx in the hooks folder
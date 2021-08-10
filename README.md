# GET Un-Bored 
## Activity Generator for Indecisive Humans
### Front-End Project by: [Beth Meeker](https://github.com/Meekb)

## Overview
  Have you ever been so bored that you don't know what to do? GET Un-Bored is an activity generator designed for indecisive humans. Using data from [Bored API](https://www.boredapi.com/documentation#endpoints-accessibility), users recieve a randomly generated activity card each time they click the DO A THING button. A drop down menu allows the choice of nine categories from which to get an activity, or simply leave category unselected to receive a suggestion from a random category. Users can save the activity suggestions they like. The Saved view will allow users to Complete or Delete a saved activity. Once an activity is completed, the card is moved to the user Showcase along with a timestamp of completion. If you're feeling bored, Do A Thing and GET Un-Bored!
  
## Construction
  * Built with React
  * Uses strictly Functional Components with React Hooks
  * Uses State to save/delete user activities
  * React Router gives users an authentic navigation experience
  * Fetches data from Bored API
  * Minimal styling with plaster wall backdrop for a truly boring display
  * Completed activities are displayed with colorful animated border
  * Categories: Education, Recreation, Social, DIY, Charity, Cooking, Relaxation, Music, Busywork
  * Error component for faulty url

From Un-Bored Home, users can generate a random activity by clicking the 'Do A Thing' button:
![unbored Home](https://user-images.githubusercontent.com/76264735/128799600-b220a7ee-1aa1-4eea-9f3d-210fbd25b7cf.gif)

Suggested activities can be saved:
![unbored Save](https://user-images.githubusercontent.com/76264735/128798832-7dff06cf-3a07-4cfe-bdbc-af05b6caefb9.gif)

In Saved view, users can delete saved activities:
![unbored Delete](https://user-images.githubusercontent.com/76264735/128799132-4b2849f4-d5fd-412d-8b2a-9f4da0b99bca.gif)

Users can Complete activities which will be timestamped and moved into the Showcase:
![completeunbored](https://user-images.githubusercontent.com/76264735/128799851-7cfd4b51-a29f-4f0b-ba3c-86fdaec3213c.gif)


## Future Improvements
  * Each completed activity will be clickable, allowing user to add images and comments
  * Activity cards will include links to information about the activity

## Tech Stack

<table>
  <tr>
    <td>JavaScript ES6</td>
    <td>CSS</td>
    <td>React</td>
    <td>React Router</td>
    <td>Cypress</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
  </tr>
</table>


## Contributors

<table>
     <tr>
        <td> Beth Meeker <a href="https://github.com/meekb">GitHub</td>
      </tr>
      </tr>
<td><img src="https://avatars.githubusercontent.com/u/76264735?v=4" alt="Beth Meeker avatar"
width="150" height="auto" /></td>
    </tr>
</table>
  
  Project Managers:  
  [Kayla Gordon](https://github.com/kaylaewood) &
  [Scott Ertmer](https://github.com/sertmer)

  [Turing School of Software & Design](https://frontend.turing.edu/projects/overlook.html)

## Resources
  1. [MDN](https://developer.mozilla.org/en-US/)
  2. [CSS-tricks](https://css-tricks.com/)
  3. [gifcap](https://gifcap.dev/)



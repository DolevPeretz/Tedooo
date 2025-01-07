# Project - Item Feed with Like and Comments

This project demonstrates how to display a feed of items using React. It involves fetching data (items) from a source, displaying them in a grid layout, and providing interactive elements such as "likes" and "comments."

## Description

The goal of this project is to fetch a list of items, display them in a visually appealing and responsive grid, and allow users to interact with the items by liking them. The grid layout is dynamic and adjusts based on the available items. It also includes the option to toggle likes and update the like count.

### Steps Involved:
1. **Fetching Items**
   - The data for the items (including user name, shop name, post text, images, likes, and comments) is fetched using an API or mock data (based on implementation).
   - The items are dynamically fetched, meaning that they are loaded as you scroll, ensuring smooth performance.

2. **Displaying Items**
   - The fetched items are displayed in a grid layout using React components. Each item is wrapped inside a card-like layout with the following information:
     - **Avatar**: Image of the user.
     - **User Name**: Name of the user who posted the item.
     - **Shop Name**: Name of the shop where the item was posted.
     - **Post Text**: Description or text associated with the item.
     - **Images**: A set of images related to the item.
     - **Likes & Comments**: Number of likes and comments on the post.

3. **Grid Layout**
   - Items are displayed in a grid with a responsive layout, ensuring they appear correctly on different screen sizes.
   - The grid adjusts to display three items per row by default. If the last row has fewer than three items, they are aligned to the right.

4. **Interactivity: Likes & Comments**
   - Each item has a "like" button. Clicking the button toggles the like status for that item, updating the like count accordingly.
   - The number of likes and comments is shown for each item.

5. **Responsive Design**
   - The layout is responsive and adjusts the grid based on the number of items and the available screen size.
   - If there are fewer than three items in the last row, they will be aligned to the right with empty spaces on the left.

## Features

- **Fetching Data**: Items are fetched from an API or mock data and displayed dynamically.
- **Grid Layout**: Items are displayed in a responsive grid layout with a maximum of three items per row.
- **Like Button**: Each item has a like button that toggles the like state and updates the like count.
- **Comment Count**: Displays the number of comments for each item.
- **Sticky Header**: The page includes a sticky header for easy navigation.

## Technologies Used

- **React**: The core JavaScript library used for building the user interface.
- **CSS**: Custom CSS for styling the components and grid layout.
- **TypeScript**: Used for handling dynamic functionality such as the like button and updating the data.
- **HTML**: Used for structuring the page and displaying the content.



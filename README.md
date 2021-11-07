## 🏠 Dream Abode

### Getting Started

1. Install the required dependencies from both the client and server folders.
2. Run `npm run dev` from the server folder.
3. Run `npm start` from the client folder.

### Design

1. After wireframing I prioritised hitting as many of the original requirements as possible within the 4 hour limit. This meant some functionality was missing (front-end 'update a property'), but back-end handling for this feature was in place.
2. This approach meant prioritising breadth rather than depth, so testing and styling were in place, but not extensive.
3. After the 4 hour time limit, I returned to play with styling, add a few more tests and make a rudimentary attempt at responsive design.

### Technologies

- React with Typescript
- Tailwind: Tailwind is always a breeze to use, it is compact and intuitive, speeding up development whilst retaining a lot of the freedom of vanilla CSS.
- Express & MongoDB (Mongoose): selected for suitability and familiarity plus ease of use in a short time-frame.

### Improvements

1. I'd have added front-end functionality to the edit button, perhaps by re-factoring the Form component to allow it to be re-used, and I think the app would also benefit from delete functionality (front & back-end).
2. Add search and filtering options to the property dashboard.
3. More robust testing, particularly adding some back-end testing (Supertest).
4. Improve image handling, both CSS and integrate photo-picking (e.g. Cloudinary).

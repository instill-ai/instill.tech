# About component folder

We choose the responsiblity-based folder structure, which means

## Responsibility components

- Components that are not general usage stay in their responsible folder, for example, CareerSection will stay inside `/components/career`
- Under every responsibility folder, the structure should be flat, Category inside of the ui folder is not allowed.

### General purpose components

- General purpose components live in `/components/ui`
- Under `/components/ui` the structure will be flat. Category inside of the ui folder is not allowed.

### Avoid nested folder structure
Because we are using TailwindCSS, there is no need to have extra folder to put the component as index file, like below. We should avoid this pattern.

- /components
  - Button
    - Button.tsx
    - index.tsx

or 

- /components
  - Button
    - index.tsx

But if you have additional style file, story or test file, you should open another folder to store them. 

- /components
  - Button
    - Button.tsx
    - Button.spec.tsx
    - Button.story.tsx
    - Button.css
    - index <---- remember to export the components with additional named export

The reason we use duplicated file name as folder name is for better in-file search experience, and it won't hurt our website's speed and increase maintainance cost.

### Lift the component to the responsibility layer

You should lift the components up to the responsibility layer, like. In this way user can import your component very fast and they know where to find them. 

- /components/career
- /components/ui
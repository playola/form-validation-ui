# Form Validation UI

Form validation UI using `formik` library. The project was bootstrapped using `npm init`, and tested in the latest version of Chrome.

### [Live Demo](https://playola.github.io/form-validation-ui)

## Core Libraries:
* React
* Formik
* Styled Components

## Start here:
```
git clone https://github.com/playola/form-validation-ui.git

yarn

yarn run dev
```
See http://localhost:8080

## GitHub Pages Deploy:
GitHub Pages take the code from `gh-pages` branch. When a change is merged into `master` branch, we need to merge `master` into `gh-pages`, and deploy the application into https://playola.github.io/form-validation-ui/:
```
// ...
// After a merge into master branch

git checkout gh-pages

git merge master

yarn run deploy
```
Now, we can see the new changes from `master` on the live demo.

## References:
* https://jaredpalmer.com/formik/docs
* https://medium.com/@rossbulat/formik-for-react-introduction-to-form-management-done-right-971889b40f9f
* https://hackernoon.com/painless-react-forms-with-formik-e61b70473c60

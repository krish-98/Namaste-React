## What is JSX?

- JSX stands for JavaScript XML. It is a syntax extension to JavaScript.

## Superpowers of JSX

- Readability
- Easy to write
- Prevent from XSS (cross-site-scripting) attacks.
- We can embed any JavaScript Expression inside the curly braces.
- Similiar to HTML like syntax

## Role of type attribute in script tag? What options can I use there?

- This attribute indicates the type of script represented.

Following are the values to this attribute:

1. an empty sting or attribute is not set(default)
2. module
3. importmap

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent} => This gives an Error
- {<TitleComponent/>} => This render the component
- {<TitleComponent></TitleComponent>} => This can be used to pass children inside the component

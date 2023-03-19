# GPT3 Modern Landing Page

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Overview](#overview-wait-until-gifs-load)
- [Folder Structure](#folder-structure)

## Description

The goal of this project is to create a modern UI/UX landing page centered around the theme of GPT-3. The website will be built using Next.js, a popular React-based framework for building server-side rendered applications. The website will feature a clean and intuitive user interface that showcases the capabilities of GPT-3 and highlights its potential use cases.

The website will be designed using BEM (Block Element Modifier) methodology for CSS styling. This methodology aims to improve the maintainability and scalability of CSS by creating modular and reusable stylesheets that are easy to read and understand. BEM encourages the use of descriptive class names that reflect the purpose of the CSS rule, making it easier to understand how different elements are related and how they interact with each other.

Finally, the website will be deployed to Vercel, a cloud-based platform for deploying and hosting websites and applications. Vercel provides an easy-to-use interface for deploying Next.js applications, as well as a range of other features such as custom domains, HTTPS support, and automatic scaling.

Overall, this project aims to demonstrate how modern UI/UX design principles, along with cutting-edge technologies like Next.js and BEM, can be used to create a stunning and effective landing page that showcases the capabilities of GPT-3.

## Tech Stack

- [React](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)
- [BEM Styling](https://getbem.com/introduction/)
- [Vercel](https://vercel.com/docs)

## Overview (wait until GIFs load)

![OverView](https://user-images.githubusercontent.com/72515147/226180166-b0f600cf-9297-4166-9152-d97452f30ffc.gif)

## Folder Structure
```
.
|-- README.md        
|-- next-env.d.ts    
|-- next.config.js   
|-- package-lock.json
|-- package.json     
|-- public
|   |-- next.svg     
|   |-- thirteen.svg 
|   `-- vercel.svg
|-- src
|   |-- app
|   |   |-- api
|   |   |   `-- hello       
|   |   |       `-- route.ts
|   |   |-- favicon.ico     
|   |   |-- globals.css     
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- assets
|   |   |-- ai.png
|   |   |-- atlassian.png
|   |   |-- blog01.png
|   |   |-- blog02.png
|   |   |-- blog03.png
|   |   |-- blog04.png
|   |   |-- blog05.png
|   |   |-- dropbox.png
|   |   |-- google.png
|   |   |-- logo.png
|   |   |-- logo.svg
|   |   |-- people.png
|   |   |-- possibility.png
|   |   |-- shopify.png
|   |   `-- slack.png
|   |-- components
|   |   |-- article
|   |   |   |-- Article.tsx
|   |   |   `-- article.css
|   |   |-- brand
|   |   |   |-- Brand.tsx
|   |   |   |-- brand.css
|   |   |   `-- imports.js
|   |   |-- cta
|   |   |   |-- CTA.tsx
|   |   |   `-- cta.css
|   |   |-- feature
|   |   |   |-- Feature.tsx
|   |   |   `-- feature.css
|   |   |-- index.js
|   |   `-- navbar
|   |       |-- Navbar.tsx
|   |       `-- navbar.css
|   |-- containers
|   |   |-- blog
|   |   |   |-- Blog.tsx
|   |   |   |-- blog.css
|   |   |   `-- imports.js
|   |   |-- features
|   |   |   |-- Features.tsx
|   |   |   `-- features.css
|   |   |-- footer
|   |   |   |-- Footer.tsx
|   |   |   `-- footer.css
|   |   |-- header
|   |   |   |-- Header.tsx
|   |   |   `-- header.css
|   |   |-- index.js
|   |   |-- possibility
|   |   |   |-- Possibility.tsx
|   |   |   `-- possibility.css
|   |   `-- whatGPT3
|   |       |-- WhatGPT3.tsx
|   |       `-- whatGPT3.css
|   `-- logo.svg
`-- tsconfig.json

```

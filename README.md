# Project Overview

This is our RSS feed reader application. It uses the Google Feed Reader API to grab RSS feeds as JSON object we can make use of. It also uses the Handlebars templating library and jQuery. It contains Jasmien library for testing.

## Why this Project?

Testing is an important part of every project. Testing can be done manually but as application increases it size, manually testing becomes difficult and it takes over and over and over....over time to test it. 

This project is developed using Test Driven Developement(TDD) approach. In this project tests that project should be pass are written before the actual  project code. Now every test fail at start of the project. Now appropriate project code is written to pass this tests. 

This approach has advantage that you don't need to check your project code again and again as it is already written to pass tests. 

## What I have learnt?

This project is based on the jasmine testing framework of javaScipt. I have learnt about the Jasmine workflow. I learnt that jasmine tests the application using test suits thate are defined by its `describe()` function and tests for each test suits are defined by `it()` function.

I also learned some basic jQuery syntax for manipulating and accessing DOM elements. 



## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How I completed this project?

Firstly I practiced my knowledge of Jasmine by creating a sample project. After that I copied basic code given by udacity to my project.

I followed `Project Details` to complete this project. 

# How to run locally?
These are steps to run this project:-
1. clone the repository:-
	* using HTTP:-
		> $ git clone https://github.com/aditya81070/feedreaderProject.git
	* using SSH:-
		> git clone git@github.com:aditya81070/feedreaderProject.git
2. move into project directory and open `index.html` in your favorite browser.

# Important files:-
* `index.html`- Open this file in browser to run RSS feed reader.
* `js/app.js` - This file has actual script to load feeds (`loadFeed()` function).
* `jasmine/lib/` - This directory contains all jasmine libraries.
* `jasmine/spec/feedreader.js` - This file contains all the tests for RSS feed reader. 

# Project Details 

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 

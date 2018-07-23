/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0)
		});

		 /*This test will check that every object id allFeeds array has property url and it's
		 not empty. This will filter out all the objects that satisfy this condition.
		 If length of urlFeeds(this contains filterd object) and length of allFeeds is equal, it passes
		 the test.*/

		it('have url that is not empty', function() {
			let urlFeeds = allFeeds.filter(function(obj) {
				return obj.hasOwnProperty('url') && obj.url.length != 0;
			});
			expect(urlFeeds.length).toBe(allFeeds.length);
		});


		 /*This works on same logic above described*/
		it('have name that is not empty', function() {
			let urlFeeds = allFeeds.filter(function(obj) {
				return obj.hasOwnProperty('name') && obj.name.length != 0;
			});
			expect(urlFeeds.length).toBe(allFeeds.length);
		});

	});


	/* this initiates a new test suit named 'The menu' */
	describe('The menu', function() {

		/* 'menu element ' is main body of index.html. it has a class 'menu-hidden' 
		to hide it by default. so if body has a class 'menu-hidden' then test 
		will be passed */
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		});

		 
		 /* menu changes visibility when menu icon(has class 'menu-icon-link') is clicked and 
		 'menu-hidden' class is removed from body element.
		 This test first trigger click event and expect that body does not have 'menu-hidden' class.
		 If it doesn't have then this expectation will be true.
		 

		  By again clicking the 'menu-icon-link', 'menu-hidden' class is added to body and visibility 
		 of menu changes. So this time, we again trigger click event and check that body should have 'menu-hidden'
		 class. if it have then expectation is true. 

		  As both expectations are true, the test is passed. */

		it('changes visibility', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toBeFalsy();
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		});

	});

	/* Add new test suit 'Initial Entries' */

	describe('Initial Entries', function() {

		/*loadFeed is asynchronous so it is necessary to ensure that it is completed 
		before we test it.
		Here 'done' is a callback function that will tell that loadFeed is executed completely 
		and now we can test. 
		*/
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		 /* After loadFeed is completed it will put content in article that has a class of .entry.
			.entry has parent who has class of .feed. 
			To check that there is at least a single .entry element within .feed container, we get all
			elements with class .entry within .feed and check that the lenght of this list(list of elements)
			is not 0.
			if it is not, test is passed.
		 */

		it('have atleast one entry in feed', function(done) {
			expect($('.feed .entry').length).not.toEqual(0);
			done();
		})

	});

	/*Add new test suit 'New Feed Selection' */

	describe('New Feed Selection', function() {
		/* Content of article before loadFeed is completed */
		const contentBeforeLoad = $('article').text();

		/* As loadFeed is asynchronous function, done() function is required 
		to ensure that test run after loadFeed is completed 
		*/

		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		 /* It compares the content of article that it has changed after loadFeed is completed */
		it('changes content', function(done) {
			expect($('article').text()).not.toBe(contentBeforeLoad);
			done();
		});
	});

}());
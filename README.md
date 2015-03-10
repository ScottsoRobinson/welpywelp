# Welpywelp

[Heroku link][heroku]

[heroku]: http://welpywelp.herokuapp.com/

## Minimum Viable Product
Welpywelp! Is a yelp clone built on rails and backbone. Users will be able to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create restaurants
- [ ] Create create restaurant reviews, hopefully including pics
- [ ] View restaurants and reviews
- [ ] Search for restaurants by title, and hopefully other parameters
- [ ] Search for reviews within a restaurant by what is contained in the review


## Design Docs
<!-- * [View Wireframes][views] -->
* Wireframes are currently on paper in notebook.
* [DB schema][schema]

<!-- [views]: ./docs/views.md -->
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Restaurant Creation (~1-2 days)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create restaurants using
a simple text form in a Rails view.

[Details][phase-one]

### Phase 2: Viewing Restaurants and their Reviews (~2 days)
I will add API routes to serve restaurant and review data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create restaurants and reviews on any restaurant and view both restaurants and their reviews.

[Details][phase-two]

### Phase 3: Editing and Displaying Reviews (~2 days)
I would like to use third party libraries as is likely recommended but I'm not sure which ones.
I want to allow users to upload pictures for their reviews so that they can share a more complete experience. I'm going back and forth on whether I want to allow users to edit their reviews or if I want them to just add later update reviews to past ones (still in a way editing, though).
Also I will be working on CSS stuff these days it seems.

[Details][phase-three]

### Phase 4: User Comments (~1 days)
Certain users (restaurant owners) will be able to comment and delete their comments on reviews on their restaurant page. I would really like to come up with a way to determine the ownership of a restaurant on sign-up.
The comments will be added below each Review in the Review show page. There will be a listing of the number of comments on the review show.


[Details][phase-four]

### Phase 5: Searching for Restaurants and Reviews (~2 days)
I'll need to add `search` routes to both the Restaurants and Reviews controllers. On the
Backbone side, there will be a `SearchResults` composite view has `RestaurantsIndex`
and `ReviewsIndex` subviews. These views will use plain old `restaurants` and `reviews`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Custom search features outside of title names
- [ ] Add more to forms to improve review value
- [ ] Tag reviews
- [ ] Activity history for each user and possibly restaurants
- [ ] Use a google maps api to incorporate location-based aspects into the app (like searching within a range).
- [ ] Reblogging
- [ ] Multiple sessions/session management
- [ ] User to user messages


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

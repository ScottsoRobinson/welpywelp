# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::RestaurantsController (create, index, show)
Api::ReviewsController (create, destroy, show, update)

### Views
* restaurants/show.json.jbuilder

## Backbone
### Models
* Restaurant (parses nested `review` association)
* Review

### Collections
* Restaurants
* Reviews

### Views
* RestaurantForm
* ReviewForm
* RestaurantsIndex (comp, contains most recent postshows, I think.)
* RestaurantShow (composite view, contains ReviewsIndex subview)
* ReviewsIndex (composite view, contains ReviewsIndexItem subviews)
* ReviewsIndexItem
* ReviewShow

## Gems/Libraries

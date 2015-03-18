# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150318181957) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.integer  "owner_id"
    t.string   "name",       null: false
    t.string   "cuisine"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "address"
  end

  create_table "review_pictures", force: :cascade do |t|
    t.integer  "review_id",            null: false
    t.integer  "user_id",              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  add_index "review_pictures", ["review_id"], name: "index_review_pictures_on_review_id", using: :btree
  add_index "review_pictures", ["user_id"], name: "index_review_pictures_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.text     "body",          null: false
    t.string   "title"
    t.integer  "restaurant_id", null: false
    t.integer  "rating",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["author_id", "restaurant_id"], name: "index_reviews_on_author_id_and_restaurant_id", unique: true, using: :btree
  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",             null: false
    t.string   "password_digest",      null: false
    t.string   "email",                null: false
    t.string   "session_token",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

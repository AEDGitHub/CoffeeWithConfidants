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

ActiveRecord::Schema.define(version: 2020_09_24_172556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "confabs", force: :cascade do |t|
    t.integer "host_id", null: false
    t.text "description", null: false
    t.integer "max_capacity", null: false
    t.datetime "start_time", null: false
    t.datetime "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["end_time"], name: "index_confabs_on_end_time"
    t.index ["host_id", "start_time"], name: "index_confabs_on_host_id_and_start_time", unique: true
    t.index ["start_time"], name: "index_confabs_on_start_time"
  end

  create_table "confidants", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "location_id", null: false
    t.boolean "is_host", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_confidants_on_email", unique: true
    t.index ["location_id"], name: "index_confidants_on_location_id"
    t.index ["session_token"], name: "index_confidants_on_session_token", unique: true
    t.index ["username"], name: "index_confidants_on_username", unique: true
  end

  create_table "conflations", force: :cascade do |t|
    t.integer "attendee_id", null: false
    t.integer "confab_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confab_id", "attendee_id"], name: "index_conflations_on_confab_id_and_attendee_id", unique: true
  end

  create_table "conurbations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_conurbations_on_name", unique: true
  end

end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Conurbation.destroy_all
Confidant.destroy_all

urb1 = Conurbation.create!(name: "San Francisco Bay Area, California")
urb2 = Conurbation.create!(name: "Phoenix Desert Metropolis, Arizona")
urb3 = Conurbation.create!(name: "Malmstrom Frozen Hellscape, Montana")
urb4 = Conurbation.create!(name: "Denver Rocky Mountain Utopia, Colorado")
urb5 = Conurbation.create!(name: "Naha Island Occupation Zone, Okinawa")

demo_user = Confidant.create!(
    username: "Joker",
    password: "hunter12",
    email: "breakintobreakout@fakemail.com",
    location_id: urb1.id
)
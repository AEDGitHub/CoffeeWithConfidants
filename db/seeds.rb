# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Conurbation.destroy_all
Confidant.destroy_all
Confab.destroy_all
Conflation.destroy_all

urb0 = Conurbation.create!(name: "Quarantine Cosmopolis, San Francisco Bay Area, California")
urb1 = Conurbation.create!(name: "Desert Metropolis, Phoenix-Tucson Corridor, Arizona")
urb2 = Conurbation.create!(name: "Everdark Frozen Hellscape, Great Falls, Montana")
urb3 = Conurbation.create!(name: "Rocky Mountain Utopia, Denver-Springs Corridor, Colorado")
urb4 = Conurbation.create!(name: "Pacific Postwar Occupation Zone, Ryukyu Islands, Japan")

fid0_the_demo_confidant = Confidant.create!(
    username: "Joker",
    password: "hunter12",
    email: "breakintobreakout@fakemail.com",
    location_id: urb0.id
)

fid1 = Confidant.create!(
    username: "Ryuji",
    password: "hunter12",
    email: "nomorules@fakemail.com",
    location_id: urb1.id
)

fid2 = Confidant.create!(
    username: "Ann",
    password: "hunter12",
    email: "lastsurprise@fakemail.com",
    location_id: urb2.id
)

party_time0 = Time.new(1999, 12, 31, 22, 00, 00)
end_time0 = Time.new(1999, 12, 31, 23, 00, 00)

party_time1 = Time.new(2020, 12, 31, 22, 00, 00)
end_time1 = Time.new(2020, 12, 31, 23, 00, 00)

party_time2 = Time.new(2020, 9, 29, 20, 00, 00)
end_time2 = Time.new(2020, 9, 29, 22, 00, 00)

# party_time_month = Time.now
# end_time_month = party_time_month

fab0 = Confab.create!(
    host_id: fid0_the_demo_confidant.id,
    description: "Party like it's 1999!",
    max_capacity: 8,
    start_time: party_time0,
    end_time: end_time0
)

fab1 = Confab.create!(
    host_id: fid1.id,
    description: "Cry me a river in the desert.",
    max_capacity: 7,
    start_time: party_time1,
    end_time: end_time1
)

fab2 = Confab.create!(
    host_id: fid2.id,
    description: "Hopefully I'm the only one you see, otherwise your backend isn't working! ^_^",
    max_capacity: 4,
    start_time: party_time2,
    end_time: end_time2
)

flation0 = Conflation.create!(
    confab_id: fab2.id,
    attendee_id: fid1.id
)

# fab2 = Confab.create!(
#     host_id: fid0_the_demo_confidant.id,
#     description: "Test 'fab for the month."
#     max_capacity: 8,
#     start_time: party_time_month,
#     end_time: end_time_month 
# )
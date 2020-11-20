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

urb0 =
  Conurbation.create!(
    name: 'Quarantine Cosmopolis, San Francisco Bay Area, California'
  )
urb1 =
  Conurbation.create!(
    name: 'Desert Metropolis, Phoenix-Tucson Corridor, Arizona'
  )
urb2 =
  Conurbation.create!(
    name: 'Everdark Frozen Hellscape, Great Falls Outpost, Montana'
  )
urb3 =
  Conurbation.create!(
    name: 'Rocky Mountain Utopia, Denver-Springs Range, Colorado'
  )
urb4 =
  Conurbation.create!(
    name: 'Pacific Postwar Occupation Zone, Ryukyu Islands Chain, Japan'
  )

fid0_the_demo_confidant =
  Confidant.create!(
    username: 'Joker',
    password: 'hunter12',
    email: 'breakintobreakout@fakemail.com',
    location_id: urb0.id,
    avatar_id: 0
  )

fid1 =
  Confidant.create!(
    username: 'Ryuji',
    password: 'hunter12',
    email: 'nomorules@fakemail.com',
    location_id: urb1.id,
    avatar_id: 2
  )

fid2 =
  Confidant.create!(
    username: 'Ann',
    password: 'hunter12',
    email: 'lastsurprise@fakemail.com',
    location_id: urb4.id,
    avatar_id: 3
  )

party_time0 = Time.new(1999, 12, 31, 22, 0o0, 0o0).to_i * 1000
end_time0 = Time.new(1999, 12, 31, 23, 0o0, 0o0).to_i * 1000

party_time1 = Time.new(2020, 12, 31, 22, 0o0, 0o0).to_i * 1000
end_time1 = Time.new(2020, 12, 31, 23, 0o0, 0o0).to_i * 1000

party_time2 = Time.new(2020, 10, 22, 20, 0o0, 0o0).to_i * 1000
end_time2 = Time.new(2020, 10, 22, 22, 0o0, 0o0).to_i * 1000

party_time3 = Time.new(2020, 10, 29, 20, 0o0, 0o0).to_i * 1000
end_time3 = Time.new(2020, 10, 29, 22, 0o0, 0o0).to_i * 1000

party_time4 = Time.new(2020, 11, 22, 20, 0o0, 0o0).to_i * 1000
end_time2 = Time.new(2020, 10, 22, 22, 0o0, 0o0).to_i * 1000

party_time5 = Time.new(2020, 11, 29, 20, 0o0, 0o0).to_i * 1000
end_time3 = Time.new(2020, 10, 29, 22, 0o0, 0o0).to_i * 1000

fab0 =
  Confab.create!(
    host_id: fid0_the_demo_confidant.id,
    description: "Party like it's 1999!",
    max_capacity: 8,
    start_time_in_ms: party_time0,
    end_time_in_ms: end_time0
  )

fab1 =
  Confab.create!(
    host_id: fid1.id,
    description: 'Cry me a river in the desert.',
    max_capacity: 7,
    start_time_in_ms: party_time1,
    end_time_in_ms: end_time1
  )

fab2 =
  Confab.create!(
    host_id: fid2.id,
    description:
      "This is a super long text description to test that your layout works! If your cards get busted because of too much text in the party description, that'd be a real bummer, wouldn't it? ^_^",
    max_capacity: 4,
    start_time_in_ms: party_time2,
    end_time_in_ms: end_time2
  )

fab3 =
  Confab.create!(
    host_id: fid1.id,
    description: 'Super short description.',
    max_capacity: 4,
    start_time_in_ms: party_time2,
    end_time_in_ms: end_time2
  )

flation0 = Conflation.create!(confab_id: fab2.id, attendee_id: fid1.id)

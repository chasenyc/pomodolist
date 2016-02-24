# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

mark = User.create!(username: 'mark', password: 'reallySecure')

Todo.create!(user: mark, title: 'send out challenges', pom_estimate: 8, pom_total: 7)
Todo.create!(user: mark, title: 'look at a lot of pomodoros', pom_estimate: 6, pom_total: 4)
Todo.create!(user: mark, title: 'select best candidate', pom_estimate: 2)
Todo.create!(user: mark, title: 'find other people jobs', pom_estimate: 10)
Todo.create!(user: mark, title: 'play some games', pom_estimate: 4, completed: true, pom_total: 1)
Todo.create!(user: mark, title: 'afternoon nap', pom_estimate: 1, completed: true, pom_total: 2)

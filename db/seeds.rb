# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Organizer.destroy_all
organizer1 = Organizer.create(email: "hallo@moto.com", fname: "Hallo", lname: "Moto", password: "hallomoto")

organizer2 = Organizer.create(email: "sup@sup.com", fname: "sup", lname: "sup", password: "supsup")

organizer3 = Organizer.create(email: "username@password.com", fname: "User", lname: "Name", password: "Password")

demo_oragnizer = Organizer.create(email: "demo@account.com", fname: "Demo", lname: "Account", password: "password")
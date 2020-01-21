# Toornament

Toornament is an ionic/Angular application. The project has been developped by Elisa Biver, Lucien Pochon and Adrien Lestuzzi. This was done during the DevMobil course taught at [HEIG-VD](https://heig-vd.ch/).

This app is for e-sport gamers. you can make teams with other players and create tournaments with multiple teams.

The app use an API REST, [e-sport](https://e-sport-dev.herokuapp.com/) developped during ArchiOWeb course given by [Simon Oulevay](https://github.com/AlphaHydrae).



## Requirements
[Node.js](https://nodejs.org/en/) 12.x

## Usage

```
git clone https://github.com/elisabiver/e-sport-dev-front.git
cd e-sport-dev-front
npm install
ionic serve
```

The browser is going to automatically launch a page on [http://localhost:8100](http://localhost:8100)

## Resources

If it's the first time, you have to create an account on the register page. 

With this app you can:

* Create your account and log in.
* Consult your profile and your teams
* Create, join, edit, delete a team
* Create, join, edit, delete a tournament and add your geolocation
* See a list of all the players

### Registration and log in
If you don't have an account, you can create one on the register page. You have to enter :

* Your first and last name
* An available pseudo
* Your birthdate
* A password
* Your gender

After your registration, you will directly be logged in and redirected to your profile page.
If you already have an account, you can simply log in with your pseudo and your password.

### Profile page
You can now consult your profile page. You will find a profile picture, your teams and how many teams and tournaments are currently available. 

### Create a team
You can create a new team by selecting "create a new team" in your menu or directly at the bottom of the team's list page. You have to enter an available name and add the players you want in your team.

If all the operations are correctly proceeded, you will see a toast message at the bottom of your screen that confirms it. If you have an error, you will also see a toast message that asks you to start over.

### Teams list
You can consult all the teams informations. If you press on the team's name, you will see a card with all the players that are members of this team. You can also :

* Delete a team
* Modify a team : you will have to enter a new team name and add the players that you want in the team.

If all the operations are correctly proceeded, you will see a toast message at the bottom of your screen that confirms it. If you have an error, you will also see a toast message that asks you to start over.

### Create a tournament
You can create a new tournament by selecting "create a new tournament" in your menu or directly at the bottom of the tournament's list page. You have to enter an available name and add the teams you want in your tournament. You will also be asked if your device can use your current geolocation for the location of the tournament. You can also enter manually the coordinates you want for the tournament.

If all the operations are correctly proceeded, you will see a toast message at the bottom of your screen that confirms it. If you have an error, you will also see a toast message that asks you to start over.

### Tournaments list
You can consult all the tournaments informations. If you press on the tournament's name, you will see a card with all the teams that are participating in the tournament. You can also :

* Delete a tournament
* Modify a tournament : you will have to enter a new tournament name and add the teams that you want in the tournament.

If all the operations are correctly proceeded, you will see a toast message at the bottom of your screen that confirms it. If you have an error, you will also see a toast message that asks you to start over.

### Players list 

With the list you can filter the players by gender and sort the players by:
* Age 
* Pseudo
* First name
* Last name
* Order of register

And there is a REVERSE button to reverse the list. 

#### Useful links 

[Ionic Documentation](https://ionicframework.com/docs)

[Angular Documentation](https://angular.io/docs/)

# Foodtruck Rewards
This is a simple aplication to track Foodtruck reward programs. Where user can create a reward, read status of a reward, update the reward, and delete reward.

Foodtruck Reward contain the following technologies:

MERN Stack
* Mongo DB
* Express
* React.js
* Node.js

### Links
* [Client Side Repo](https://choosealicense.com/licenses/mit/)
* [Deployed Site](https://ryansalandy.github.io/foodtruck-rewards-client/#/)

## Planning
Started with what the resource would be and how I would CRUD on that resource. I then decided that the resource should be a digital reward card that users will create to track points. The routes where then created along with user stories, ERD, and wireframe.

V2. will have the actual rewards added to the card by trucks for users to earn

### Paths & Routes
| Method | Path | Action | CRUD |
| ------ | ---- | ------ | ---- |
| POST   | /reward | create | Create |
| GET    | /reward | index  | Read |
| GET    | /reward/id | show | Read |
| PATCH  | /reward/:id | update | Update |
| DELETE | /reward/id | destroy | Delete |

### User Stories
* As a customer, I want to sign up so that I can earn food truck rewards.
* As a customer, I want to sign in so that I can can manage my rewards
* As a customer, I want to change my password so that I can keep my account secure
* As a customer, I want to sign out so that no one has access to my rewards
* As a customer, I want to create a rewards card so that I can earn points
* As a customer, I want to read my rewards card so that I can points earned
* As a customer, I want to update my rewards card so that I can reach the reward
* As a customer, I want to delete my rewards card after I have earned reward

### ERD:
![Food-truck-erd](https://media.git.generalassemb.ly/user/35787/files/a77c8780-e551-11eb-9966-823702ca9f85)

### Wireframe:
![Food-truck-wireframe](https://media.git.generalassemb.ly/user/35787/files/9af82f00-e551-11eb-8d6e-7c966b4af0ed)

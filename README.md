# Loopclub

## Development server

Run `docker-compose up` for a dev server.  
Backend : `http://localhost:8000/`  
Frontend : `http://localhost:3000/`  
Make sure you `export USER=$(id -u)` before running docker-compose or add it to `.bashrc` so you dont have to export it everytime.  

## API Endpoints

- List All: `/subscription-list` 
- Detailed View: `/subscription-detail/<str:pk>/`
- Create : `/subscription-create`
- Update : `/subscription-update`
- Delete : `/subscription-delete`

## Access CLI

Run `docker-compose run frontend sh` to get an interactive shell.  
From here all cli commands will work like `npm install`

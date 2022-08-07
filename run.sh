docker system prune -f 

docker image prune - f

cd backend 

docker build --tag wbinnova-api .

cd .. 

docker compose up

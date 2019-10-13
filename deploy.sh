#change sdg-template and heroku web app to name of project; 5 places need to be changed

#creates optimized production build
dotnet publish -c Release 
#moves docker file to release folder
cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t reddit-capstone-image ./bin/release/netcoreapp2.2/publish

docker tag reddit-capstone-image registry.heroku.com/reddit-capstone/web

docker push registry.heroku.com/reddit-capstone/web

heroku container:release web -a reddit-capstone

# sudo chmod 755 deploy.sh

#after you deploy it once, you only have to do ./deploy
# ./deploy.sh
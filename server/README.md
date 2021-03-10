# Docker container creation

## Build image

To build image use the command `docker build -f ../Server ../ -t front-end-what-chat` where, "." is the current folder, "../Server" is the Dockerfile, "../" is the folder behind, this is important because docker can only work on high placement folder, docker cant get filder outside current folder, "-t" gives alias for the image.

## Run container

Execute `docker run -d -p 4000:8080/tcp front-end-what-chat` where, -d runs the container wich exits if root process pm2 stops, -p specify port mapping 8080(internal) to 4000(external), use http://localhost:4000/ to access it.

## Changes

When there are changes in the build files, remove the container, use `docker container ls`to list the container then `docker container rm <CONTAINER ID>` to remove the container, now you Run the container again.

## Server log(pm2)

To see the server log access the bash using `docker exec -i -t <CONTAINER> /bin/bash`, chnage <CONTAINER>  with the "CONTAINER ID" or "CONTAINER NAME", tail the logs using `pm2 log --lines 1000` change the number with the lines required.
# set base image (host OS)
FROM python:3.8

# set the working directory in the container
WORKDIR /usr/src/

# copy requirements.txt to /usr/src
COPY requirements.txt .

# install all dependecies
RUN pip install -r requirements.txt 
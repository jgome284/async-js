# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

# Deno version 1.40.0, Debian GNU/Linux 12 (bookworm)
FROM ubuntu:18.04 as development
# Set the working directory in the container

# Set timezone
ENV TZ=US/Eastern

# Prepare the tzdata install
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/app

# Update the system and install necessary packages
    # This command updates the package lists for the APT (Advanced Package Tool) package manager. 
    # It fetches the latest information about available packages from the configured repositories.
RUN apt-get update && \
    apt-get upgrade -y

# Install applications
RUN apt-get install -y git && \
    apt-get install -y nodejs && \
    apt-get install -y npm && \
    apt-get install -y jupyter
   
# Get iJavaScript Kernal
RUN npm install -g --unsafe-perm ijavascript && \
    # Add iJS Kernal for Jupyter
    ijsinstall --install=global

# launch jupyter notebook
CMD jupyter notebook --port=8888 --ip=0.0.0.0 --allow-root

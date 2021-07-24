# Docker

## Building the Container

`docker build -t client -f Dockerfile .`

- `-t` flag specifies the tag name of the image you are building
- `-f` flag specifies the Dockerfile location to use to generate the image
- `.` at the end of the above command specifies the context to send to the docker builder. For example, if you had your code in a code folder, you could say `- docker build -t client -f Dockerfile code` instead

This command is used to build the container, it uses the `Dockerfile`.

## Running the Container

`docker run --rm -it -p 4200:4200 client`

- `--rm` will stop the image and remove it when you hit Ctrl + C
- `-p` is mapping the port from the external (local computer) to the internal image port. You can leave the first 4200 off to let docker select a random port for you.

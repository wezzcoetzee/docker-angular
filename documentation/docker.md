# Docker

## Build Container

`docker build -t client -f Dockerfile .`

- `-t` flag specifies the tag name of the image you are building
- `-f` flag specifies the Dockerfile location to use to generate the image
- `.` at the end of the above command specifies the context to send to the docker builder. For example, if you had your code in a code folder, you could say `- docker build -t client -f Dockerfile code` instead

This command is used to build the container, it uses the `Dockerfile`.


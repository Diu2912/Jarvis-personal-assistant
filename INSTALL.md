# :minidisc: Installation Instructions

## Prerequisites

To run this project, the system should have the following prerequisites, if not then click on the link mentioned in the prerequites and install it and then follow the installation steps.

The prerequisites for installing the project :
1. [golang](https://golang.org/dl/ "Install GOLang")
2. [nodejs with npm](https://nodejs.org/en/download/ )
3. [python v2](https://www.python.org/)

## Installation and executing web-app
1. Clone the repository in your GOPATH
   
    ```bash
        $ mkdir -p $GOPATH/src/github.com/Harkishen-Singh/
        $ cd $GOPATH/src/github.com/Harkishen-Singh/
        $ git clone https://github.com/Harkishen-Singh/Jarvis-personal-assistant.git
        $ cd Jarvis-personal-assistant
    ```
2. Install Go and npm packages.
    ```
        $ sudo npm install -g http-server selenium-webdriver mocha mochawesome eslint
    ```
    Important, execute separately: 
    ```
        $ npm install chromedriver
    ```
    ```
        $ go get -v -u -d ./...
    ```
3. Install Python 2.*.* . To verify if its installed, `python --version`.
4. Install python dependencies.  Use `sudo` if required!
    ```bash
        pip install -r service/subprocesses/requirements.txt
    ```
5. Start the HTTP server. *Do not close this terminal*
    ```bash
        cd view/web && http-server
    ```
6. Start the GoLang server. *Do not close this terminal*
    ```bash
        cd service && go run maintut.go
    ```
7. [optional but recommended] For listening to the jarvis voice download and install **mplayer** in linux or windows, and set the **path** so that it responds when typed `mplayer` in the terminal or command prompt.

8. On running the service, it will occupy the port `:3000` and the front-end will run at port `:8080`

### for executing tests

8. `eslint view/app-jarvis.js` # for linting checks
9. `cd tests && npm install && mocha tests.js`

## Running the Desktop-app

***prerequisite :***
1. ```golang``` with path as global
2. ```node version >= 7.0.0``` & corresponding ```npm```
3. ```python version >= 2.5 and < 3.0```



*copy the following instructions in your terminal :*

1. Move to the desktop app folder
    ```bash
    cd view/desktop
    ```
2. execute the command in the terminal
    ```bash
    npm install
    ```
3. Then run to locally execute jarvis-desktop
    ```bash
     npm start
     ```
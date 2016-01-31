# Parse-Docker
:speedboat: Run the Open Source Parse Server in Docker. This Docker Image will combine a simple Express Server (with the Parse Express Router Module) and a MongoDB server into a little Pares alternative.

For this image to be useful, you probably want to override/change `cloud/main.js` - it is supposed to hold your Parse Cloud Code. Right now, it just contains some example code taken straight from Facebook's example.

## Variables
The container and the Express server accept three environment variables:

 * `APP_ID`
 * `MASTER_KEY`
 * `FILE_KEY`

## Running
```
docker run felixrieseberg/docker-parse
```

To override the environment variables, specify them in your run command:
```
docker run -d -t -i -e APP_ID='my-app-id' -e MASTER_KEY='my-master-key' -e FILE_KEY='mt-file-key' -p 8080:8080 felixrieseberg/docker-parse
```

## License
MIT, please see `LICENSE` for details.

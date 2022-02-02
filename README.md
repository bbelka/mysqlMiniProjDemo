# mysqlMiniProjDemo

This is a basic REST api produced as a live demonstration of the activity detailed in INSTRUCTIONS.md.

Some of the route naming was changed to follow proper REST paradigms.

There were two added routes
* ```GET: /api/movies/:id``` 
  * returns a specific movie with it's associated reviews
* ```POST: /api/reviews```
  * posts a review

## Usage Instructions
1. Find the repository [here](https://github.com/bbelka/mysqlMiniProjDemo) and clone.
2. Navigate to the root of the project and install the dependencies:
```
npm install
```
3. Define your environment variables:
    * Create '.env' file in the root of the project.
    * Define 'PORT' and 'MYSQL_PASSWORD' variables as applicable to your situation.
4. Use mysql to run the provided ```schema.sql``` and ```seeds.sql``` files located in the db folder.

5. Launch the server:
```
node server.js
```
6. Test routes with your favorite software.
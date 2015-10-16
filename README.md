# generator-simple-html 

> A generator for simple html sites, powered by [Yeoman](http://yeoman.io)

This generator was for demonstration purposes. It's not intended to be used in a real project.

## Getting Started

You will need: 
* Node & npm
* Grunt (`npm install -g grunt-cli`)
* Yeoman (`npm install -g yo`)
* Bower (`npm install -g bower`)

Now install the generator:

```
npm install -g generator-simple-html
```

In your *empty* project folder, run

```
yo simple-html
```

You will be taken through some prompts and your project will be generated.

## Grunt tasks

There is one main task available:

```
grunt serve
```

This task will run a server for you on http://localhost:9000.

LESS files in `/less` will automatically be compiled into `www/css/main.css`. *If you create additional LESS files, make sure you `@import` them in `less/main.less`.

You can also run `grunt less` to compile the LESS to CSS if you're not using the server.

## License

MIT

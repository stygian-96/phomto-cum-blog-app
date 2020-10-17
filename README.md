# Vue-Setup-Frontend

## Project setup
```
npm install -g @vue/cli
```

### Download dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Django-Setup-Backend

## django_postgresql
using postgresql database with django

## INSTALLATION
Install the postgresql database in your local computer first from the .exe file on the offical site.

Install the postgresql package for python - psycopg2 using pip in virtualenv

## CONFIGURE
Create a new virtualenv and then install all the dependencies for our project there

### Creating virtual environtment
To create a virtual environment pls refer to [link](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)

#### For windows

##### Installing virtual environment
```
pip install virtualenvwrapper-win

```
#### Setting up the virtual environment
Go to backend directory and run the following command in terminal
```
mkvirtualenv <Whatever-name-you-want-to-give-to-your-environment>
```

Install the dependencies from
```
pip install -r requirements.txt
```

### Database Setup
Create a new database using the postgresql command line.

CREATE DATABASE phomtoblog

Inside our django project settings.py, set the database as the postgresql like so,

```
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'phomtoblog',
        'USER': 'postgres',
        'PASSWORD': '<passowrd-at-the-time-of-installation>',
        'HOST': '127.0.0.1',
        'PORT': '5432',
}
```

## After Setup
Run the server using command
```
python manage.py runserver
```

## DJANGO USAGE
Just create models and run makemigrations and migrate command, the new database should work fine.

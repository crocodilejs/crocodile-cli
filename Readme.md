
# crocodile-cli

[![Slack Status][slack-image]][slack-url]
[![MIT License][license-image]][license-url]
[![Standard JS Style][standard-image]][standard-url]

> This is a simple command-line tool to generate and upgrade projects using [Crocodile][crocodile-url] (it's very similar to a project generator like [Yeoman][yeoman], but simpler).


## Install

```bash
npm install -g crocodile
```

## Usage

```bash
crocodile


          `.-::::-.`
      `-+ooooooooooo+/`
     :osso++//+ssooooos:.
    +s/.     -sssoo+ooosso-
   :o`      :yso++++o+ooyso
   /`      `:yo+++++ooosyys-
         -/++oo+++oooosy/...
     ./osss+++oo+oossosso/
     ``/oo+ssoosoossossss/
     ./+++ooossysso:.soo
    :ooooo/:-:--.    +oo-
    `--.             `.`


🐊  CrocodileJS is a Node MVC framework that lets you chew apart JavaScript - https://crocodilejs.com


  Usage:  [options] [command]


  Commands:

    chew <dir> [version]  Create a new CrocodileJS project
    upgrade               Upgrade your existing CrocodileJS project
    issues                Open GitHub issues for CrocodileJS
    docs                  Read CrocodileJS documentation on GitHub
    license               Purchase a CrocodileJS license
    rock                  I wonder what this does?

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Development

Because we utilize `babel` to compile the project, use `npm run watch` to recompile on file changes.


## License

[MIT License][license-url]


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[crocodile-url]: https://crocodilejs.com
[slack-image]: http://slack.crocodilejs.com/badge.svg
[slack-url]: http://slack.crocodilejs.com
[standard-image]: https://img.shields.io/badge/code%20style-standard%2Bes7-brightgreen.svg
[standard-url]: https://github.com/crocodilejs/eslint-config-crocodile
[eslint]: http://eslint.org/
[yeoman]: http://yeoman.io/

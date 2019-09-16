# bojler-skeleton
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/Slicejack/bojler-skeleton)
[![license](https://img.shields.io/github/license/slicejack/bojler.svg)](https://github.com/Slicejack/bojler/blob/master/LICENSE)

`bojler-skeleton` is a starter template for your [bojler](http://bojler.slicejack.com) projects.

By default, [bojler](http://bojler.slicejack.com) consists of distribution and source `.scss` files. If you want to use [bojler](http://bojler.slicejack.com) on your own project you are able to include its distribution files directly to your email templates or you can transpile `.scss` files by yourself.

To make it easier for you to start a new project with [bojler](http://bojler.slicejack.com) we've created `bojler-skeleton`. It is a simple starter template which has everything you need to start your project very quickly.

Quick features overview:
- Bojler SASS Files 🗂️
- Bojler Initial Email Template 💌
- Automated SASS to CSS Transpiler 🔢 🔀 🔠
- Automated SASS Linter (With Email Development Rules) 🖌️
- Automated CSS Inlining and Embedding 🔢 🔀 📦
- Webserver With Live Reload 🔃
- Built With Gulp 4️⃣
- Update and Extend Easily 🛠️
- It's an Open Source Project 👨‍👩‍👧‍👦

In section below you'll find everything you need to get started with `bojler-skeleton`.

## Getting started 🚀
### 1. [Download](https://github.com/Slicejack/bojler-skeleton/archive/v1.1.0.zip) — `v1.1.0`

Download `bojler-skeleton` source files [here](https://github.com/Slicejack/bojler-skeleton/archive/v1.1.0.zip).

### 2. Install Node Packages — `npm install`
Secondly, install node packages in root of your newly downloaded folder with `npm install` command.

> [This is an example](https://asciinema.org/a/J505xs1KCUxFaL1PpMtDacpOf) of what you should get after you run `npm install` command.

### 3. Start Development Server With LiveReload
Let's fire up our development server 🔥

Run `npm run dev` in your project root folder.

> [This is an example](https://asciinema.org/a/Sl0UAzRRM7jALm0aEMJcPB9K2) of what you should get after you run `npm run dev` command and save some changes while your development server is running.

While your development server is running, every time you make and save changes they will be automatically compiled to your `dist/` folder.

### 4. Build Templates
Now you can start adding custom `.html` and `.scss` files inside `src/` folder.

Make sure every `.scss` partial that needs to be inlined end up in your `src/scss/inline.scss` file.

Same goes for partials that needs to be embedded in your `<head>`, make sure they end up in `src/scss/embed.scss`.

### 5. Use your emails 🏁 🎉
Finally, distribution files will be available in `dist/` folder.

`embed.scss` will be embedded in the `<head>` and `inline.scss` will be inlined in HTML markup of your email template.

Emails will be freshly compiled and will wait for you every time you run `npm run build` or `npm run dev` command.

## CLI
Quick overview of CLI commands available with `bojler-skeleton`:
<table>
	<thead>
		<tr>
			<td width="160"><strong>Command</strong></td>
			<td><strong>Description</strong></td>
			<td width="160"><strong>Example</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td width="160"><code>npm run build</code></td>
			<td>Builds distribution files. Use it for minor changes and quick fixes.</td>
			<td width="160"><a href="https://asciinema.org/a/XsetdLCsMLIK0JNZhRJdaWHhh">Video</a></td>
		</tr>
		<tr>
			<td width="160"><code>npm run dev</code></td>
			<td>Runs development server with LiveReload. It will watch for changes and updated your <code>dist/</code> folder accordingly.</td>
			<td width="160"><a href="https://asciinema.org/a/Sl0UAzRRM7jALm0aEMJcPB9K2">Video</a></td>
		</tr>
	</tbody>
</table>

## Bugs and feature requests 🕷️
If you find a bug or need new feature please open a [new issue](https://github.com/Slicejack/bojler-skeleton/issues) and we will discuss about it.

## How to contribute ? 🛠️
You can review the [guidelines for contributing](https://github.com/Slicejack/bojler-skeleton/blob/master/CONTRIBUTING.md) to this repository [here](https://github.com/Slicejack/bojler-skeleton/blob/master/CONTRIBUTING.md).

## Change Log
All notable changes to this project will be documented in [CHANGELOG file](https://github.com/Slicejack/bojler-skeleton/blob/master/CHANGELOG.md).

## License
All contents of this boilerplate are licensed under the [MIT license](https://github.com/Slicejack/bojler-skeleton/blob/master/LICENSE.md).

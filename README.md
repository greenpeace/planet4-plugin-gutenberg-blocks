# Greenpeace Planet 4 Gutenberg Blocks Plugin

![Planet 4](./planet4.png)

## What is it?

This the WordPress Gutenberg blocks plugin for Greenpeace Planet 4 project.
You can learn more about this project on [the Planet 4 blog](https://medium.com/planet4).

## Contribute

The best place to start is from main [Planet 4 repo](https://github.com/greenpeace/planet4) that contains all the necessary information and tickets to get started.

## How to use this plugin in Planet 4

You can use the plugin in Wordpress directly, by including it at your `composer.json` file:
```
"require": {
    ...
    "greenpeace/planet4-plugingutenberg-plugin" : "X.X.X",
    ...
},
```

## Assets build

You'll need npm to install the dependencies, just run  `npm install`  to install them.

To develop:

- run `npm start` to start a watcher that will rebuild everytime you make a change.
- run `npm run build` to manually build the files.

## Build Setup

Wordpress provides a single dependency for the whole build setup including:

* Babel: the transpiler for JSX & ES6 syntax to browser-compatible JS
* Webpack: the bundler for all the JS modules and dependency resolution

## How to develop a new block you ask?

1. Create a new class that extends `Base_Block` ( `P4GBKS\Blocks\Base_Block` ) inside directory _classes/blocks_. The class name should follow naming convention, for example **Blockname** and its file name should be class-**blockname**.php.

1. Implement its parent's class abstract method. In block's **constructor** you need to define the block's details (fields, schema) using `register_block_type` and add (required) empty method **prepare_data()**.

1. Create a new folder inside [src/blocks](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/tree/master/assets/src/blocks) named after your block **Blockname**, and add there the components that will be used to render your block. In this folder you will usually need three files:

    - **BlocknameBlock.js** should be a class that uses WordPress [registerBlockType](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) to define the block's attributes, schema, styles and `edit()`/`save()` functions. `edit()` function should return a React component that will be used for rendering the block in the editor. The
    `save()` function should return a React component that will be used for rendering the block in the frontend.

    - **BlocknameEditor.js** should be a class that defines a React component that implements `renderEdit()` and `renderView()`.
    `renderEdit()` should be used to render the block in the editor, to define editor-specific things such as sidebar options. `renderView()` will be used to render the static parts and the in-place editable parts of the block, to make it look as close to the end result as possible.

    - **BlocknameFrontend.js** should be a React component that will be used to render the block in the frontend. It needs to be added to the [frontendIndex](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/blob/master/assets/src/frontendIndex.js) if you used [frontendRendered](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/blob/master/assets/src/blocks/frontendRendered.js) in the `save()` function from **BlocknameBlock.js**.

	To learn more details about the render logic, refer to the [blocks page in Planet 4 Gitbook](https://support.greenpeace.org/planet4/tech/blocks).

1. Create a new scss file inside [src/styles/blocks](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/tree/master/assets/src/styles/blocks) named after your block **Blockname.scss** to use for block's frontend styling. You'll need to import this new file in [blocks.scss](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/blob/master/assets/src/styles/blocks.scss).

    Create a new file named **BlocknameEditor.scss** to use for block's editor styling if you need to style the block in the editor. You'll need to import this file in [editorStyle.scss](https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/blob/master/assets/src/styles/editorStyle.scss).

1. Finally, before committing do **npm run build** to build the plugin's assets and **vendor/bin/phpcs** to check for any php styling errors in your code.

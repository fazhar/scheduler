function route(handle, pathname) {
    if (typeOf handle[pathname] === function) {
        handle[pathname]();
    } else {
        console.log('Not a valid path');
    }
}

exports.route = route;

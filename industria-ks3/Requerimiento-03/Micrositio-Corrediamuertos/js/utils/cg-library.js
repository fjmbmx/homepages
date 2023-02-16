((window, document) => {

    'use strict';

    const initCg = () => {

        let element = null,
            frame = null,
            routes = {},
            controllers = {},
            currentController = null;

        const cg = {

            getID: function(id) {
                element = document.getElementById(id);
                return this;
            },

            getElement: function(id) {
                return document.getElementById(id);
            },

            noSubmit: function() {
                element.addEventListener('submit', (event) => {
                    event.preventDefault();
                }, false);
                return this;
            },

            routing: function() {
                frame = element;
                return this;
            },

            route: function(route, template, controller, charge) {
                routes[route] = {
                    'template': template || null,
                    'controller': controller || null,
                    'charge': charge || null
                };
                return this;
            },

            routeManager: function() {
                const hash = window.location.hash.substring(1) || '/',
                    navitems = document.querySelectorAll('.activeitem'),
                    destination = routes[hash],
                    xhr = new XMLHttpRequest();
                
                let elementNav = null;

                if (destination && destination.template) {

                    if (navitems.length > 0) { navitems[0].classList.remove('activeitem'); }

                    if (hash === '/') {
                        elementNav = cg.getElement('home');
                        elementNav.classList.add('activeitem');
                    } else {
                        elementNav = cg.getElement(hash.split('/')[1]);
                        elementNav.classList.add('activeitem');
                    }

                    if (destination.controller) {
                        currentController = controllers[destination.controller].controller;
                    }

                    xhr.addEventListener('load', function() {
                        frame.innerHTML = this.responseText;
                        setTimeout( function() {
                            if(typeof(destination.charge) === 'function') {
                                destination.charge();
                            }
                        }, 500);

                    }, false);

                    xhr.open('get', destination.template, true);
                    xhr.send(null);

                } else {
                    window.location.hash = '#/';
                }
            },

            controller: function(name, ctrl) {
                controllers[name] = {'controller': ctrl};
            },

            getCtrl: function() {
                return currentController;
            }

        };

        return cg;
    };

    if (typeof window.cg === 'undefined') {
        window.cg = window.$cg = initCg();
        window.addEventListener('load', cg.routeManager, false);
        window.addEventListener('hashchange', cg.routeManager, false);
    } else {
        console.log('cg ya se ha inicializado');
    }

})(window, document);
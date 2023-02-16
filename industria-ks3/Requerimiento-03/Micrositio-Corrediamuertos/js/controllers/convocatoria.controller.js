((window, document) => {

    cg.controller('convocatoria', {

        convocatoria: {},
        test: function() {
            alert('controlador de convocatoria: '+$cg.getElement('hola'));
        }

    });

})(window, document);
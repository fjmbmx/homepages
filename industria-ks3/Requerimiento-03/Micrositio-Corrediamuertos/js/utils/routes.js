((window, document) => {

    const routes = $cg.getID('views').routing();

    routes.route('/', 'views/home.html', null, null);
    routes.route('/convocatoria', 'views/convocatoria.html', 'convocatoria', ()=>{
        alert('se inicio convocatoria');
    });

})(window, document);